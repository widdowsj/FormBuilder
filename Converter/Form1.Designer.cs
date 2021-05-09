
namespace Converter
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this._previewTextBox = new System.Windows.Forms.TextBox();
            this._loadButton = new System.Windows.Forms.Button();
            this._convertButton = new System.Windows.Forms.Button();
            this._convertedTextBox = new System.Windows.Forms.TextBox();
            this._saveButton = new System.Windows.Forms.Button();
            this.tableLayoutPanel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.ColumnCount = 1;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel1.Controls.Add(this._previewTextBox, 0, 1);
            this.tableLayoutPanel1.Controls.Add(this._loadButton, 0, 0);
            this.tableLayoutPanel1.Controls.Add(this._convertButton, 0, 2);
            this.tableLayoutPanel1.Controls.Add(this._convertedTextBox, 0, 3);
            this.tableLayoutPanel1.Controls.Add(this._saveButton, 0, 4);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(0, 0);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 5;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle());
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle());
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle());
            this.tableLayoutPanel1.Size = new System.Drawing.Size(800, 450);
            this.tableLayoutPanel1.TabIndex = 0;
            // 
            // _previewTextBox
            // 
            this._previewTextBox.Dock = System.Windows.Forms.DockStyle.Fill;
            this._previewTextBox.Location = new System.Drawing.Point(3, 32);
            this._previewTextBox.MaxLength = 0;
            this._previewTextBox.Multiline = true;
            this._previewTextBox.Name = "_previewTextBox";
            this._previewTextBox.ScrollBars = System.Windows.Forms.ScrollBars.Both;
            this._previewTextBox.Size = new System.Drawing.Size(794, 175);
            this._previewTextBox.TabIndex = 0;
            // 
            // _loadButton
            // 
            this._loadButton.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this._loadButton.Location = new System.Drawing.Point(362, 3);
            this._loadButton.Name = "_loadButton";
            this._loadButton.Size = new System.Drawing.Size(75, 23);
            this._loadButton.TabIndex = 1;
            this._loadButton.Text = "Load";
            this._loadButton.UseVisualStyleBackColor = true;
            this._loadButton.Click += new System.EventHandler(this._loadButton_Click);
            // 
            // _convertButton
            // 
            this._convertButton.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this._convertButton.Location = new System.Drawing.Point(362, 213);
            this._convertButton.Name = "_convertButton";
            this._convertButton.Size = new System.Drawing.Size(75, 23);
            this._convertButton.TabIndex = 2;
            this._convertButton.Text = "Convert";
            this._convertButton.UseVisualStyleBackColor = true;
            this._convertButton.Click += new System.EventHandler(this._convertButton_Click);
            // 
            // _convertedTextBox
            // 
            this._convertedTextBox.Dock = System.Windows.Forms.DockStyle.Fill;
            this._convertedTextBox.Location = new System.Drawing.Point(3, 242);
            this._convertedTextBox.MaxLength = 0;
            this._convertedTextBox.Multiline = true;
            this._convertedTextBox.Name = "_convertedTextBox";
            this._convertedTextBox.ScrollBars = System.Windows.Forms.ScrollBars.Both;
            this._convertedTextBox.Size = new System.Drawing.Size(794, 175);
            this._convertedTextBox.TabIndex = 3;
            // 
            // _saveButton
            // 
            this._saveButton.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this._saveButton.Location = new System.Drawing.Point(362, 423);
            this._saveButton.Name = "_saveButton";
            this._saveButton.Size = new System.Drawing.Size(75, 23);
            this._saveButton.TabIndex = 4;
            this._saveButton.Text = "Save";
            this._saveButton.UseVisualStyleBackColor = true;
            this._saveButton.Click += new System.EventHandler(this._saveButton_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.tableLayoutPanel1);
            this.Name = "Form1";
            this.Text = "Form Converter";
            this.tableLayoutPanel1.ResumeLayout(false);
            this.tableLayoutPanel1.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.TextBox _previewTextBox;
        private System.Windows.Forms.Button _loadButton;
        private System.Windows.Forms.Button _convertButton;
        private System.Windows.Forms.TextBox _convertedTextBox;
        private System.Windows.Forms.Button _saveButton;
    }
}

