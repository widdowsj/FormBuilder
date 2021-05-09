using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Converter
{
    public static class FormatExtensions
    {
        public static NewFormat.Form ConvertToNewForm(this OldFormat.Form oldForm)
        {
            var newForm = new NewFormat.Form
            {
                Name = oldForm.Name,
                FormType = oldForm.QuestionnaireType,
                IsPublished = oldForm.IsPublished,
            };

            newForm.PageList.AddRange(oldForm.Pages.Select(x => new NewFormat.Page
            {
                PageId = x.Guid,
                Text = x.Description,
                Order = x.Order,
            }));

            newForm.ItemList.AddRange(oldForm.Pages.SelectMany(x => oldForm.GetPageQuestions(x)));
            return newForm;
        }

        public static IEnumerable<NewFormat.FormItem> GetPageQuestions(this OldFormat.Form form, OldFormat.Page page)
        {
            var order = 0;
            return page.QuestionList.OrderBy(x => x.Order)
                .SelectMany(x => form.GetQuestions(x.QuestionThreadId))
                .Select(x => new NewFormat.FormItem
                {
                    ItemId = x.QuestionThreadId,
                    PageId = page.Guid,
                    Description = x.InternalDescription,
                    Text = x.Text,
                    Order = order++,
                    QuestionType = x.QuestionType,
                    RelatedFormItemId = (x.ParentConditionalValue ?? x.RelatedConditionalValue) != null ? x.ParentQuestionThreadId ?? x.RelatedQuestionThreadId : null,
                });
        }

        public static IEnumerable<OldFormat.Question> GetQuestions(this OldFormat.Form form, string questionThreadId)
        {
            yield return form.QuestionList
                .Where(x => string.Equals(x.QuestionThreadId, questionThreadId, StringComparison.OrdinalIgnoreCase))
                .First();

            var childQuestions = form.QuestionList
                .Where(x => string.Equals(x.ParentQuestionThreadId, questionThreadId, StringComparison.OrdinalIgnoreCase))
                .OrderBy(x => x.Order)
                .SelectMany(x => form.GetQuestions(x.QuestionThreadId));

            foreach (var question in childQuestions)
            {
                yield return question;
            }
        }
    }
}
