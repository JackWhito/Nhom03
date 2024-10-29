import Voucher from "../models/VoucherModel.js";
export const getAllVoucher = async(req, res) => {
    try {
        const vouchers = await Voucher.findAll({
            attributes:['id','percent']
        });
        res.json(vouchers);
    } catch (error) {
        console.log(error);
    }
};
export const searchVoucher = async (req, res) => {
    try {
        const { voucherId } = req.params;

        const voucher = await Voucher.findByPk(voucherId);
        if (voucher) {
            res.json(voucher);
        } else {
            res.status(404).json({ error: 'Voucher not found' });
        }    
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const addVoucher = async (req, res) => {
    const { id, percent } = req.body;
    try {
        const newVoucher = await Voucher.create({ id, percent });
        res.status(201).json(newVoucher);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const updateVoucher = async (req, res) => {
    const { id } = req.params;
    const { percent } = req.body;
    try {
        const voucher = await Voucher.findByPk(id);
        if (!voucher) {
            return res.status(404).json({ error: 'Voucher not found' });
        }
        voucher.percent = percent;
        await voucher.save();
        res.json(voucher);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteVoucher = async (req, res) => {
    const { id } = req.params;
    try {
        const voucher = await Voucher.findByPk(id);
        if (!voucher) {
            return res.status(404).json({ error: 'Voucher not found' });
        }
        await voucher.destroy();
        res.json({ message: 'Voucher deleted' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
