import React from 'react'
import ReactDOM from 'react-dom/client'
import { Formik, Field, Form } from 'formik';
import './index.css'



const Basic = () => (
    <div className='formContainer'>
        <h1>Facturación NikuCar</h1>
        <Formik
            initialValues={{
                idOperacion: "",
                serie: "",
                fecha: "",
                divisa: "",
                tipoCambio: "",
                rfcEmisor: "",
                rfc: "",
                razonSocial: "",
                domicilioFiscal: "",
                regimenFiscal: "",
                metodoPago: "",
                formaPago: "",
                usoCfdi: "",
                totalFactura: "",
                claveProdServ: "",
                claveUnidad: "",
                concepto: "",
                cantidad: "",
                importeUnitario: "",
                descuento: "",
                retenidos: "",
                impuesto: "",
                porcentaje: "",
                importe: "",
            }}

            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <label htmlFor="idOperacion">Id de Operación</label>
                <Field id="idOperacion" name="idOperacion" />

                <label htmlFor="serie">Serie</label>
                <Field id="serie" name="serie" />

                <label htmlFor="divisa">Divisa</label>
                <Field id="divisa" name="divisa" />

                <label htmlFor="tipoCambio">Tipo de cambio</label>
                <Field id="tipoCambio" name="tipoCambio" />

                <label htmlFor="rfcEmisor">RFC del Emisor</label>
                <Field id="rfcEmisor" name="rfcEmisor" />

                <label htmlFor="rfc">RFC</label>
                <Field id="rfc" name="rfc" />

                <label htmlFor="razonSocial">Razón Social</label>
                <Field id="razonSocial" name="razonSocial" />

                <label htmlFor="domicilioFiscal">Domicilio Fiscal</label>
                <Field id="domicilioFiscal" name="domicilioFiscal" />

                <label htmlFor="regimenFiscal">Régimen Fiscal</label>
                <Field id="regimenFiscal" name="regimenFiscal" />

                <label htmlFor="metodoPago">Método de pago</label>
                <Field id="metodoPago" name="metodoPago" />

                <label htmlFor="formaPago">Forma de pago</label>
                <Field id="formaPago" name="formaPago" />

                <label htmlFor="usoCfdi">Uso del CFDI</label>
                <Field id="usoCfdi" name="usoCfdi" />

                <label htmlFor="totalFactura">Total</label>
                <Field id="totalFactura" name="totalFactura" />

                <h2>Conceptos</h2>

                <label htmlFor="claveProdServ">Clave de Producto o Servicio</label>
                <Field id="claveProdServ" name="claveProdServ" />

                <label htmlFor="claveUnidad">Clave de Unidad</label>
                <Field id="claveUnidad" name="claveUnidad" />

                <label htmlFor="concepto">Concepto</label>
                <Field id="concepto" name="concepto" />

                <label htmlFor="cantidad">Cantidad</label>
                <Field id="cantidad" name="cantidad" />

                <label htmlFor="impoteUnitario">Importe Unitario</label>
                <Field id="impoteUnitario" name="impoteUnitario" />

                <label htmlFor="descuento">Descuento</label>
                <Field id="descuento" name="descuento" />

                <h2>Impuestos</h2>

                <label htmlFor="retenidos">Retenidos</label>
                <Field id="retenidos" name="retenidos" />

                <h2>Traslados</h2>

                <label htmlFor="impuesto">Impuesto</label>
                <Field id="impuesto" name="impuesto" />

                <label htmlFor="porcentaje">Porcentaje</label>
                <Field id="porcentaje" name="porcentaje" />

                <label htmlFor="importe">Importe</label>
                <Field id="importe" name="importe" />

                <label>
                    <Field type="checkbox" name="terms" value="terms" />
                    Acepto términos y condiciones
                </label>

                {/* {/<label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        /> } */}
                <button className='submitBtn' type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
);

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Basic />)
