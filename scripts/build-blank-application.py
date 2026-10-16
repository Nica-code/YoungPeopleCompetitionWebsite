"""Generate the one-page, hand-fillable application offered on the website."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas


OUTPUT = Path(__file__).resolve().parents[1] / "public" / "2027-young-peoples-competition-application.pdf"
INK = colors.HexColor("#10231f")
OXBLOOD = colors.HexColor("#7b2f3a")
SAGE = colors.HexColor("#73867f")
MUTED = colors.HexColor("#5f6c67")
IVORY = colors.HexColor("#f5f0e7")


def field(pdf, label, x, y, width):
    pdf.setFillColor(INK)
    pdf.setFont("Helvetica-Bold", 8.5)
    pdf.drawString(x, y, label)
    pdf.setStrokeColor(SAGE)
    pdf.setLineWidth(0.6)
    pdf.line(x, y - 18, x + width, y - 18)


def section(pdf, label, y):
    pdf.setFillColor(OXBLOOD)
    pdf.setFont("Helvetica-Bold", 10)
    pdf.drawString(46, y, label.upper())
    pdf.setStrokeColor(OXBLOOD)
    pdf.setLineWidth(0.9)
    pdf.line(46, y - 8, 566, y - 8)


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUTPUT), pagesize=letter)
    pdf.setTitle("2027 Young People's Competition application")
    pdf.setAuthor("Young People's Concert Committee")

    pdf.setFillColor(INK)
    pdf.setFont("Helvetica-Bold", 9)
    pdf.drawString(46, 748, "66TH ANNUAL YOUNG PEOPLE'S CONCERT")
    pdf.setFont("Times-Bold", 26)
    pdf.drawString(46, 713, "2027 audition application")
    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica", 9)
    pdf.drawString(46, 690, "Ages 12-18  |  Tri-State Area  |  Received by December 14, 2026")

    section(pdf, "Applicant", 658)
    field(pdf, "Applicant name", 46, 635, 380)
    field(pdf, "Grade", 444, 635, 122)
    field(pdf, "Applicant email", 46, 596, 300)
    field(pdf, "Applicant telephone", 365, 596, 201)
    field(pdf, "Applicant mailing address", 46, 557, 520)
    field(pdf, "School", 46, 518, 520)

    section(pdf, "Teacher", 482)
    field(pdf, "Teacher's name", 46, 459, 520)
    field(pdf, "Teacher's email", 46, 420, 300)
    field(pdf, "Teacher's telephone", 365, 420, 201)
    field(pdf, "Teacher's mailing address", 46, 381, 520)

    section(pdf, "Musical selection", 345)
    field(pdf, "Name of musical selection", 46, 322, 520)
    field(pdf, "Composer", 46, 283, 300)
    field(pdf, "Duration", 365, 283, 201)
    field(pdf, "Instrument or voice", 46, 244, 250)
    field(pdf, "Accompanist's name", 315, 244, 251)

    pdf.setFillColor(IVORY)
    pdf.roundRect(46, 89, 520, 108, 6, fill=1, stroke=0)
    pdf.setFillColor(INK)
    pdf.setFont("Helvetica-Bold", 10)
    pdf.drawString(62, 176, "Mail this application with a $30 check")
    pdf.setFont("Helvetica", 9)
    pdf.drawString(62, 158, "Make check payable to Young People's Concert Committee.")
    pdf.drawString(62, 136, "Judith Short  |  121 Elwood Avenue  |  Huntington, WV 25705")
    pdf.setFillColor(OXBLOOD)
    pdf.setFont("Helvetica-Bold", 9)
    pdf.drawString(62, 109, "Both must be received by Monday, December 14, 2026.")

    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica", 8)
    pdf.drawString(46, 58, "Print and mail this form. The website does not accept electronic applications.")
    pdf.showPage()
    pdf.save()


if __name__ == "__main__":
    main()
