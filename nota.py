from flask import Flask, render_template, request, send_file
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import io

app = Flask(__name__)

def gerar_pdf(nome_cliente, numero_mesa, itens, total):
    
    buffer = io.BytesIO()
    c = canvas.Canvas(buffer, pagesize=letter)
    
   
    c.setFont("Helvetica-Bold", 16)
    c.drawString(200, 750, "Nota Fiscal")
    
   
    c.setFont("Helvetica", 12)
    c.drawString(50, 700, f"Nome do Cliente: {nome_cliente}")
    c.drawString(50, 680, f"Número da Mesa: {numero_mesa}")
    
   
    c.drawString(50, 640, "Itens:")
    y_position = 620
    for item in itens:
        c.drawString(50, y_position, f"{item['quantidade']} x {item['nome']} - R$ {item['preco']} (Total: R$ {item['total']})")
        y_position -= 20

   
    c.setFont("Helvetica-Bold", 12)
    c.drawString(50, y_position - 20, f"Total: R$ {total}")
    
    c.save()

    buffer.seek(0)  
    return buffer

@app.route('/gerar_pdf', methods=['POST'])
def gerar_pdf_route():
    
    nome_cliente = request.form['nomeCliente']
    numero_mesa = request.form['numeroMesa']
    itens = [
        {'nome': 'Hamburguer', 'quantidade': 2, 'preco': 15.50, 'total': 31.00},
        {'nome': 'Cerveja', 'quantidade': 3, 'preco': 5.00, 'total': 15.00}
    ]
    total = sum(item['total'] for item in itens)

    # Gerando o PDF
    pdf_buffer = gerar_pdf(nome_cliente, numero_mesa, itens, total)

    
    return send_file(pdf_buffer, as_attachment=True, download_name="nota_fiscal.pdf", mimetype="application/pdf")

if __name__ == '__main__':
    app.run(debug=True)
