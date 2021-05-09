using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Converter
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void _loadButton_Click(object sender, EventArgs e)
        {
            var ofn = new OpenFileDialog();
            ofn.Filter = "JSON Files (*.json)|*.json";
            if (ofn.ShowDialog() == DialogResult.OK)
            {
                using var sr = new StreamReader(ofn.OpenFile());
                _previewTextBox.Text = sr.ReadToEnd();
            }
        }

        private void _saveButton_Click(object sender, EventArgs e)
        {
            var sfn = new SaveFileDialog();
            sfn.Filter = "JSON Files (*.json)|*.json";
            if (sfn.ShowDialog() == DialogResult.OK)
            {
                using var sw = new StreamWriter(sfn.OpenFile());
                sw.Write(_convertedTextBox.Text);
            }
        }

        private void _convertButton_Click(object sender, EventArgs e)
        {
            var json = _previewTextBox.Text;
            var oldForm = JsonSerializer.Deserialize<OldFormat.Form>(json)!;
            var newForm = oldForm.ConvertToNewForm();
            var options = new JsonSerializerOptions
            {
                WriteIndented = true,
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
                Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping,
            };

            _convertedTextBox.Text = JsonSerializer.Serialize(newForm, options);
        }
    }
}
