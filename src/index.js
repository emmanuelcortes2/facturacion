// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import {  useFormik } from 'formik' //Field, Form,
// import * as yup from 'yup'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import './index.css'

import React from 'react';
import { createRoot } from 'react-dom/client';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import './index.css'
import { InputLabel, MenuItem } from '@mui/material'

const validationSchema = yup.object({
    idOperacion: yup.number()
});

const BillingFormUi = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useFormik({
        initialValues: {
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
            impuesto: "",
            porcentaje: "",
            importe: ""
        },

        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },

        currencies: [
            {
                value: 'MXN',
                label: '$ MXN',
            },
            {
                value: 'USD',
                label: '$ USD',
            },
            {
                value: 'EUR',
                label: '€ EUR',
            },
        ]

    });

    return (
        <div className='form-container'>
            <h1>Facturación</h1>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    id="idOperacion"
                    name="idOperacion"
                    label="ID de Operación"
                    value={formik.values.idOperacion}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="serie"
                    name="serie"
                    label="Serie"
                    value={formik.values.serie}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="divisa"
                    name="divisa"
                    select
                    label="Divisa"
                    defaultValue="MXN"
                    value={formik.values.divisa}
                    onChange={formik.handleChange}
                >
                    <MenuItem value={'MXN'}>MXN</MenuItem>
                    <MenuItem value={'USD'}>USD</MenuItem>
                </TextField>

                <TextField
                    id="tipoCambio"
                    name="tipoCambio"
                    label="Tipo de cambio"
                    value={formik.values.tipoCambio}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="rfcEmisor"
                    name="rfcEmisor"
                    label="RFC del Emisor"
                    value={formik.values.rfcEmisor}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="rfc"
                    name="rfc"
                    label="RFC"
                    value={formik.values.rfc}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="razonSocial"
                    name="razonSocial"
                    label="Razón Social"
                    value={formik.values.razonSocial}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="domicilioFiscal"
                    name="domicilioFiscal"
                    label="Domicilio Fiscal"
                    value={formik.values.domicilioFiscal}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="regimenFiscal"
                    name="regimenFiscal"
                    label="Régimen fiscal"
                    value={formik.values.regimenFiscal}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="metodoPago"
                    name="metodoPago"
                    label="Método de pago"
                    value={formik.values.metodoPago}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="formaPago"
                    name="formaPago"
                    label="Forrma de pago"
                    value={formik.values.formaPago}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="usoCfdi"
                    name="usoCfdi"
                    label="Uso del CFDI"
                    value={formik.values.usoCfdi}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="totalFactura"
                    name="totalFactura"
                    label=" Total de la factura"
                    value={formik.values.totalFactura}
                    onChange={formik.handleChange}
                />
                <h2>Conceptos</h2>

                <TextField
                    id="claveProdServ"
                    name="claveProdServ"
                    label="Clave de producto o servicio"
                    value={formik.values.claveProdServ}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="claveUnidad"
                    name="claveUnidad"
                    label="Clave de Unidad"
                    value={formik.values.claveUnidad}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="concepto"
                    name="concepto"
                    label="Concepto"
                    value={formik.values.concepto}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="cantidad"
                    name="cantidad"
                    label="Cantidad"
                    value={formik.values.cantidad}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="importeUnitario"
                    name="importeUnitario"
                    label="Importe Unitario"
                    value={formik.values.importeUnitario}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="descuento"
                    name="descuento"
                    label="Descuento"
                    value={formik.values.descuento}
                    onChange={formik.handleChange}
                />

                <h2>Impuestos</h2>

                <TextField
                    id="retenidos"
                    name="retenidos"
                    label="Retenidos"
                    value={formik.values.retenidos}
                    onChange={formik.handleChange}
                />

                <h2>Traslados</h2>

                <TextField
                    id="impuesto"
                    name="impuesto"
                    label="Impuesto"
                    value={formik.values.impuesto}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="porcentaje"
                    name="porcentaje"
                    label="Porcentaje"
                    value={formik.values.porcentaje}
                    onChange={formik.handleChange}
                />

                <TextField
                    id="importe"
                    name="importe"
                    label="Importe"
                    value={formik.values.importe}
                    onChange={formik.handleChange}
                />

                {/* <label>
                             <Field type="checkbox" name="terms" value="terms" />
                             Aceptar términos y condiciones
                         </label> */}

                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                >
                    Generar Factura
                </Button>
            </form>
        </div >
    );
};
const root = createRoot(document.getElementById('root'))
root.render(<BillingFormUi />);


// const billingValidation = Yup.object({
//     idOperacion: Yup.number(),

//     serie: Yup.number(),

//     fecha: Yup.date()
//         .required(),

//     rfc: Yup.string(),

//     rfcEmisor: Yup.string().required(),

//     tipoCambio: Yup.number(),

//     razonSocial: Yup.string()
//         .required(),

//     domicilioFiscal: Yup.string()
//         .required(),

//     totalFactura: Yup.number()
// })

// const Basic = () => {
//     const formik = useFormik({
//         initialValues: {
//             idOperacion: "",
//             serie: "",
//             fecha: "",
//             divisa: "",
//             tipoCambio: "",
//             rfcEmisor: "",
//             rfc: "",
//             razonSocial: "",
//             domicilioFiscal: "",
//             regimenFiscal: "",
//             metodoPago: "",
//             formaPago: "",
//             usoCfdi: "",
//             totalFactura: "",
//             claveProdServ: "",
//             claveUnidad: "",
//             concepto: "",
//             cantidad: "",
//             importeUnitario: "",
//             descuento: "",
//             impuesto: "",
//             porcentaje: "",
//             importe: ""
//         },

//         validationSchema: billingValidation,
//         onSubmit: (values) => {
//             alert(JSON.stringify(values, null, 2))
//         },
//     })

//     return (
//         <div className='form-container'>
//             <h1>Facturación</h1>
//             <form onSubmit={formik.handleSubmit}>
//                 <TextField
//                     id="idOperacion"
//                     name="idOperacion"
//                     label="ID de Operación"
//                 />

//                 <TextField
//                     id="serie"
//                     name="serie"
//                     label="Serie"
//                 />

//                 <select
//                     as="select"
//                     id="divisa"
//                     name="divisa"
//                 >
//                     <option value="MXN">MXN</option>
//                     <option value="USD">USD</option>
//                 </select>

//                 <TextField
//                     id="tipoCambio"
//                     name="tipoCambio"
//                     label="Tipo de cambio"
//                 />

//                 <TextField
//                     id="rfcEmisor"
//                     name="rfcEmisor"
//                     label="RFC del Emisor"
//                 />

//                 <TextField
//                     id="rfc"
//                     name="rfc"
//                     label="RFC"
//                 />

//                 <TextField
//                     id="razonSocial"
//                     name="razonSocial"
//                     label="Razón Social"
//                 />

//                 <TextField
//                     id="domicilioFiscal"
//                     name="domicilioFiscal"
//                     label="Domicilio Fiscal"
//                 />

//                 <TextField
//                     id="regimenFiscal"
//                     name="regimenFiscal"
//                     label="Régimen fiscal"
//                 />

//                 <TextField
//                     id="metodoPago"
//                     name="metodoPago"
//                     label="Método de pago"
//                 />

//                 <TextField
//                     id="formaPago"
//                     name="formaPago"
//                     label="Forrma de pago"
//                 />

//                 <TextField
//                     id="usoCfdi"
//                     name="usoCfdi"
//                     label="Uso del CFDI"
//                 />

//                 <TextField
//                     id="totalFactura"
//                     name="totalFactura"
//                     label=" Total de la factura"
//                 />

//                 <h2>Conceptos</h2>

//                 <TextField
//                     id="claveProdServ"
//                     name="conceptos.claveProdServ"
//                     label="Clave de producto o servicio"
//                 />

//                 <TextField
//                     id="claveUnidad"
//                     name="conceptos.claveUnidad"
//                     label="Clave de Unidad"
//                 />

//                 <TextField
//                     id="concepto"
//                     name="conceptos.concepto"
//                     label="Concepto"
//                 />

//                 <TextField
//                     id="cantidad"
//                     name="conceptos.cantidad"
//                     label="Cantidad"
//                 />

//                 <TextField
//                     id="importeUnitario"
//                     name="conceptos.importeUnitario"
//                     label="Importe Unitario"
//                 />

//                 <TextField
//                     id="descuento"
//                     name="conceptos.descuento"
//                     label="Descuento"
//                 />

//                 <h2>Impuestos</h2>

//                 <TextField
//                     id="retenidos"
//                     name="conceptos[impuesto][retenidos]"
//                     label="Retenidos"
//                 />

//                 <h2>Traslados</h2>

//                 <TextField
//                     id="impuesto"
//                     name="conceptos[impuesto][traslados][impuesto]"
//                     label="Impuesto"
//                 />

//                 <TextField
//                     id="porcentaje"
//                     name="conceptos[impuesto][traslados][porcentaje]"
//                     label="Porcentaje"
//                 />

//                 <TextField
//                     id="importe"
//                     name="conceptos[impuesto][traslados][importe]"
//                     label="Importe"
//                 />

//                 <label>
//                     <Field type="checkbox" name="terms" value="terms" />
//                     Aceptar términos y condiciones
//                 </label>

//                 <Button
//                     variant="contained"
//                     type="submit"
//                 >
//                     Generar Factura
//                 </Button>
//             </form>
//         </div >
//     );
// };

// ========================================

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Basic />)
