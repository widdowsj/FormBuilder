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

            foreach (var oldPage in oldForm.Pages)
            {
                var newPage = new NewFormat.Page
                {
                    PageId = IdGenerator.NextId("page"),
                    Text = oldPage.Description,
                    Order = oldPage.Order,
                };
                newForm.PageList.Add(newPage);
                newForm.ItemList.AddRange(oldForm.GetPageQuestions(oldPage, newPage.PageId));
            }

            return newForm;
        }

        public static IEnumerable<NewFormat.FormItem> GetPageQuestions(this OldFormat.Form form, OldFormat.Page page, string pageId)
        {
            var order = 0;
            return page.QuestionList.OrderBy(x => x.Order)
                .SelectMany(x => form.GetQuestions(x.QuestionThreadId))
                .Select(x => new NewFormat.FormItem
                {
                    ItemId = x.QuestionThreadId,
                    PageId = pageId,
                    Description = x.InternalDescription,
                    Text = x.Text,
                    Order = order++,
                    QuestionType = x.GetQuestionType(),
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

        public static string GetQuestionType(this OldFormat.Question question)
        {
            switch (question.QuestionType)
            {
                case "Multiline Text":
                    if (question.Attributes.Any(x => x.Type == "Rich Text Editor"))
                        return "RichText";
                    return "MultilineText";

                case "Single Select":
                    if (question.Attributes.Any(x => x.Type == "Dropdown"))
                        return "Dropdown";
                    return "RadioButtons";
            }
            return question.QuestionType;
        }
    }
}
