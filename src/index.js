import React from 'react'
import ReactDOM from 'react-dom/client'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
    <div className='form-container'>
        <h1>Facturación</h1>
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

            validationSchema={billingValidation}
        >

            {({ errors, touched }) => (
                <Form>
                    <TextField
                        id="idOperacion"
                        name="idOperacion"
                        label="ID de Operación"
                    />
                    {errors.idOperacion && touched.idOperacion ? (
                        <div style={{ color: '#F40000' }}>{errors.idOperacion}</div>
                    ) : null}


                    <TextField
                        id="serie"
                        name="serie"
                        label="Serie"
                    />
                    {errors.serie && touched.serie ? (
                        <div>{errors.serie}</div>
                    ) : null}

                    <TextField
                        as="select"
                        id="divisa"
                        name="divisa"
                        label="Divisa"
                    >
                        <option value="MXN">MXN</option>
                        <option value="USD">USD</option>
                    </TextField>

                    <TextField
                        id="tipoCambio"
                        name="tipoCambio"
                        label="Tipo de cambio"
                    />
                    {errors.tipoCambio && touched.tipoCambio ? (
                        <div>{errors.tipoCambio}</div>
                    ) : null}

                    <TextField
                        id="rfcEmisor"
                        name="rfcEmisor"
                        label="RFC del Emisor"
                    />
                    {errors.rfcEmisor && touched.rfcEmisor ? (
                        <div>{errors.rfcEmisor}</div>
                    ) : null}

                    <TextField
                        id="rfc"
                        name="rfc"
                        label="RFC"
                    />
                    {errors.rfc && touched.rfc ? (
                        <div>{errors.rfc}</div>
                    ) : null}

                    <TextField
                        id="razonSocial"
                        name="razonSocial"
                        label="Razón Social"
                    />
                    {errors.razonSocial && touched.razonSocial ? (
                        <div>{errors.razonSocial}</div>
                    ) : null}

                    <TextField
                        id="domicilioFiscal"
                        name="domicilioFiscal"
                        label="Domicilio Fiscal"
                    />
                    {errors.domicilioFiscal && touched.domicilioFiscal ? (
                        <div>{errors.domicilioFiscal}</div>
                    ) : null}

                    <TextField
                        id="regimenFiscal"
                        name="regimenFiscal"
                        label="Régimen fiscal"
                    />

                    <TextField
                        id="metodoPago"
                        name="metodoPago"
                        label="Método de pago"
                    />

                    <TextField
                        id="formaPago"
                        name="formaPago"
                        label="Forrma de pago"
                    />
                    <ErrorMessage name='formaPago' />

                    <TextField
                        id="usoCfdi"
                        name="usoCfdi"
                        label="Uso del CFDI"
                    />

                    <TextField
                        id="totalFactura"
                        name="totalFactura"
                        label=" Total de la factura"
                    />
                    <ErrorMessage name='totalFactura' />
                    {errors.totalFactura && touched.totalFactura ? (
                        <div>{errors.totalFactura}</div>
                    ) : null}

                    <h2>Conceptos</h2>

                    <TextField
                        id="claveProdServ"
                        name="conceptos.claveProdServ"
                        label="Clave de producto o servicio"
                    />

                    <TextField
                        id="claveUnidad"
                        name="conceptos.claveUnidad"
                        label="Clave de Unidad"
                    />

                    <TextField
                        id="concepto"
                        name="conceptos.concepto"
                        label="Concepto"
                    />

                    <TextField
                        id="cantidad"
                        name="conceptos.cantidad"
                        label="Cantidad"
                    />

                    <TextField
                        id="importeUnitario"
                        name="conceptos.importeUnitario"
                        label="Importe Unitario"
                    />
                    {/* <ErrorMessage name='conceptos.importeUnitario' /> */}

                    <TextField
                        id="descuento"
                        name="conceptos.descuento"
                        label="Descuento"
                    />

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
                    <Button
                        className='submitBtn'
                        type="submit"
                        variant="contained"
                    >
                        Generar Factura
                    </Button>
                </Form>
            )}
        </Formik>
    </div >
);

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Basic />)
