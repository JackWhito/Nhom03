import Comment from "../models/CommentModel.js";
export const getAllComment = async(req, res) => {
    try {
        const comments = await Comment.findAll({
            attributes:['id','userId','productId','content']
        });
        res.json(comments);
    } catch (error) {
        console.log(error);
    }
};

export const getCommentByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const comments = await Comment.findAll({
            where: { userId },
            attributes: ['id', 'productId', 'stars', 'content']
        });
        res.json(comments);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};


export const addComment = async (req, res) => {
    const { userId, productId, stars, content } = req.body;
    try {
        const newComment = await Comment.create({
            userId,
            productId,
            stars,
            content,
        });
        res.status(201).json(newComment);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const getCommentsByProduct = async (req, res) => {
    const { productId } = req.params;
    try {
        const comments = await Comment.findAll({
            where: { productId },
            attributes: ['id', 'userId', 'stars', 'content']
        });
        res.json(comments);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const updateComment = async (req, res) => {
    const { id } = req.params;
    const { stars, content } = req.body;
    try {
        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        comment.stars = stars;
        comment.content = content;
        await comment.save();
        res.json(comment);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteComment = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        await comment.destroy();
        res.json({ message: 'Comment deleted' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

