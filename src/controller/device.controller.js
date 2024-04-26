import { readAllDevices, createUpdateDevice, getDeviceById } from "../db/db.device.js"



export const listaDispositivos = async (req, res) => {
    try {
        const { success, data, total } = await readAllDevices()
        res.status(200).json({ success, data, total })
    } catch (error) {
        return res.status(404).json({ message: 'error' });
    }
}
export const crearActualizarDispositivo = async (req, res) => {
    console.log('body', req.body)
    const validar = await getDeviceById(req.body.id);
    if (validar.success) {
        return res.status(200).json({ success: false, data: 'Dispositivo ya existente' })
    }
    const now = new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' });
    req.body.createdAt = now;
    req.body.updatedAt = now;
    const { success, data } = await createUpdateDevice(req.body);
    res.status(200).json({ success, data })
}
export const obtenerDispositivo = async (req, res) => {

    try {
        const { id } = req.params;
        const { success, data } = await getDeviceById(id)
        res.status(200).json({ success, data })
    } catch (error) {
        return res.status(500).json({ message: 'error' });
    }

}
export const deleteDevice = () => { }