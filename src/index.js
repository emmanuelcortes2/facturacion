import React from 'react'
import ReactDOM from 'react-dom/client'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextField from '@mui/material/TextField';
import './index.css'


const billingValidation = Yup.object({
    idOperacion: Yup.number()
        .required('Este campo no puede estar vacío'),

    serie: Yup.number()
        .required('Este campo no puede estar vacío')
        .test(
            'Is number?',
            'ERROR: Este campo debe ser númerico',
            (value) => value > 0
        ),

    fecha: Yup.date()
        .required(),

    rfc: Yup.string()
        .required('Este campo no puede estar vacío'),

    rfcEmisor: Yup.string()
        .required(),

    tipoCambio: Yup.number()
        .typeError('Este campo debe ser un número')
        .required('Este campo no puede estar vacío'),

    razonSocial: Yup.string()
        .required(),

    domicilioFiscal: Yup.string()
        .required(),

    totalFactura: Yup.number()
        .typeError('Este campo debe ser un número')
        .required('Este campo no puede estar vacío')
})


const Basic = () => (
    <div className='formContainer'>
        <h1>Facturación NikuCar</h1>
        <Formik
            initialValues={{
                idOperacion: "", tipoCambioserie: "",
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
                conceptos: {
                    claveProdServ: "",
                    claveUnidad: "",
                    concepto: "",
                    cantidad: "",
                    importeUnitario: "",
                    descuento: "",
                    impuesto: {
                        retenidos: [],
                        traslados: {
                            impuesto: "",
                            porcentaje: "",
                            importe: ""
                        },
                    },
                },
            }}

            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                console.log('Output: ', JSON.stringify(values, null, 2));
            }}

            validationSchema={ billingValidation }
        >

            {({ errors, touched }) => (
                <Form>
                    <TextField
                        fullWidth
                        id="idOperacion"
                        name="idOperacion"
                        label="ID de Operación"
                    />
                    {errors.idOperacion && touched.idOperacion ? (
                        <div>{errors.idOperacion}</div>
                    ) : null}


                    <label htmlFor="serie">Serie</label>
                    <Field id="serie" name="serie" />
                    {errors.serie && touched.serie ? (
                        <div>{errors.serie}</div>
                    ) : null}

                    <label htmlFor="divisa">Divisa</label>
                    <Field as="select" id="divisa" name="divisa" >
                        <option value="MXN">MXN</option>
                        <option value="USD">USD</option>
                    </Field>

                    <label htmlFor="tipoCambio">Tipo de cambio</label>
                    <Field id="tipoCambio" name="tipoCambio" />
                    {errors.tipoCambio && touched.tipoCambio ? (
                        <div>{errors.tipoCambio}</div>
                    ) : null}

                    <label htmlFor="rfcEmisor">RFC del Emisor</label>
                    <Field id="rfcEmisor" name="rfcEmisor" />
                    {errors.rfcEmisor && touched.rfcEmisor ? (
                        <div>{errors.rfcEmisor}</div>
                    ) : null}

                    <label htmlFor="rfc">RFC</label>
                    <Field id="rfc" name="rfc" />
                    {errors.rfc && touched.rfc ? (
                        <div>{errors.rfc}</div>
                    ) : null}

                    <label htmlFor="razonSocial">Razón Social</label>
                    <Field id="razonSocial" name="razonSocial" />
                    {errors.razonSocial && touched.razonSocial ? (
                        <div>{errors.razonSocial}</div>
                    ) : null}

                    <label htmlFor="domicilioFiscal">Domicilio Fiscal</label>
                    <Field id="domicilioFiscal" name="domicilioFiscal" />
                    {errors.domicilioFiscal && touched.domicilioFiscal ? (
                        <div>{errors.domicilioFiscal}</div>
                    ) : null}

                    <label htmlFor="regimenFiscal">Régimen Fiscal</label>
                    <Field id="regimenFiscal" name="regimenFiscal" />

                    <label htmlFor="metodoPago">Método de pago</label>
                    <Field id="metodoPago" name="metodoPago" />

                    <label htmlFor="formaPago">Forma de pago</label>
                    <Field id="formaPago" name="formaPago" />
                    <ErrorMessage name='formaPago' />

                    <label htmlFor="usoCfdi">Uso del CFDI</label>
                    <Field id="usoCfdi" name="usoCfdi" />

                    <label htmlFor="totalFactura">Total</label>
                    <Field id="totalFactura" name="totalFactura" />
                    <ErrorMessage name='totalFactura' />
                    {errors.totalFactura && touched.totalFactura ? (
                        <div>{errors.totalFactura}</div>
                    ) : null}

                    <h2>Conceptos</h2>

                    <label htmlFor="claveProdServ">Clave de Producto o Servicio</label>
                    <Field id="claveProdServ" name="conceptos.claveProdServ" />

                    <label htmlFor="claveUnidad">Clave de Unidad</label>
                    <Field id="claveUnidad" name="conceptos.claveUnidad" />

                    <label htmlFor="concepto">Concepto</label>
                    <Field id="concepto" name="conceptos.concepto" />

                    <label htmlFor="cantidad">Cantidad</label>
                    <Field id="cantidad" name="conceptos.cantidad" />

                    <label htmlFor="importeUnitario">Importe Unitario</label>
                    <Field id="importeUnitario" name="conceptos.importeUnitario" />
                    {/* <ErrorMessage name='conceptos.importeUnitario' /> */}

                    <label htmlFor="descuento">Descuento</label>
                    <Field id="descuento" name="conceptos.descuento" />

                    <h2>Impuestos</h2>

                    {/* <label htmlFor="retenidos">Retenidos</label>
                <Field id="retenidos" name="conceptos[impuesto][retenidos]" />

                <h2>Traslados</h2>

                <label htmlFor="impuesto">Impuesto</label>
                <Field id="impuesto" name="conceptos[impuesto][traslados][impuesto]" />

                <label htmlFor="porcentaje">Porcentaje</label>
                <Field id="porcentaje" name="conceptos[impuesto][traslados][porcentaje]" />

                <label htmlFor="importe">Importe</label>
                <Field id="importe" name="conceptos[impuesto][traslados][importe]" /> */}

                    <label>
                        <Field type="checkbox" name="terms" value="terms" />
                        Acepto términos y condiciones
                    </label>
                    <button className='submitBtn' type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div >
);

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Basic />)
