using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Converter.OldFormat
{
    public class Form
    {
        public string Name { get; set; } = "";
        public string QuestionnaireType { get; set; } = "";
        public bool IsPublished { get; set; }
        public List<Page> Pages { get; set; } = new();
        public List<Question> QuestionList { get; set; } = new();
    }

    public class Page
    {
        public int Order { get; set; }
        public string Description { get; set; } = "";
        public List<QuestionPageMap> QuestionList { get; set; } = new();
    }

    public class QuestionPageMap
    {
        public string QuestionThreadId { get; set; } = "";
        public int Order { get; set; }

    }

    public class Question
    {
        public string QuestionThreadId { get; set; } = "";
        public string InternalDescription { get; set; } = "";
        public int? Order { get; set; }
        public string QuestionType { get; set; } = "";
        public string Text { get; set; } = "";
        public string? RootQuestionThreadId { get; set; }
        public string? ParentQuestionThreadId { get; set; }
        public string? ParentConditionalValue { get; set; }
        public string? RelatedQuestionThreadId { get; set; }
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
        public int? Order { get; set; }
    }
}
