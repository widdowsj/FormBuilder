using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Converter.NewFormat
{
    public class Form
    {
        public string Name { get; set; } = "";
        public string FormType { get; set; } = "";
        public bool IsPublished { get; set; }
        public List<Page> PageList { get; set; } = new();
        public List<FormItem> ItemList { get; set; } = new();
    }

    public class Page
    {
        public string PageId { get; set; } = "";
        public string Text { get; set; } = "";
        public int? Order { get; set; }
    }

    public class FormItem
    {
        public string ItemId { get; set; } = "";
        public string PageId { get; set; } = "";
        public string Description { get; set; } = "";
        public int? Order { get; set; }
        public string QuestionType { get; set; } = "";
        public string Text { get; set; } = "";
        public string? RelatedFormItemId { get; set; }
        public string? RelatedConditionalValue { get; set; }
        public List<QuestionAttribute> Attributes { get; set; } = new();
        public List<Field> Fields { get; set; } = new();
        public List<Option> Options { get; set; } = new();
    }

    public class QuestionAttribute
    {
        public string Type { get; set; } = "";
        public string Parameter { get; set; } = "";
    }

    public class Field
    {
        public string Type { get; set; } = "";
        public string Text { get; set; } = "";
        public int Order { get; set; }
    }

    public class Option
    {
        public string Value { get; set; } = "";
        public string Text { get; set; } = "";
        public int Order { get; set; }
    }
}
