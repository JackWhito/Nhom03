import BonusPoint from "../models/BonusPointModel.js";

export const getPointByUserID = async (req, res) => {
    const { userId } = req.params;
    try {
        const bonusPoints = await BonusPoint.findAll({
            where: { userId },
            attributes: ['id', 'value']
        });
        res.json(bonusPoints);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const addBonusPoint = async (req, res) => {
    const { id, userId, value } = req.body;
    try {
        const newBonusPoint = await BonusPoint.create({ id, userId, value });
        res.status(201).json(newBonusPoint);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const updateBonusPoint = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;
    try {
        const bonusPoint = await BonusPoint.findByPk(id);
        if (!bonusPoint) {
            return res.status(404).json({ error: 'Bonus point not found' });
        }
        bonusPoint.value = value;
        await bonusPoint.save();
        res.json(bonusPoint);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteBonusPoint = async (req, res) => {
    const { id } = req.params;
    try {
        const bonusPoint = await BonusPoint.findByPk(id);
        if (!bonusPoint) {
            return res.status(404).json({ error: 'Bonus point not found' });
        }
        await bonusPoint.destroy();
        res.json({ message: 'Bonus point deleted' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
