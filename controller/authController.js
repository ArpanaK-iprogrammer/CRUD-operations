const insert = require('../services/insert');
const update = require('../services/update');
const deleting = require('../services/delete');
const reading = require('../services/read')

const insertData = async (req, res) => {
    try {
        console.log(req.body);
        const storeName = req.body.storeName;
        const location = req.body.location;

        const insertedId = await insert(storeName, location);

        res.status(201).json({ message: 'Data inserted successfully', store_id: insertedId });
    } catch (error) {
        console.error('Error inserting data', error);

        res.status(500).json({ error: 'An error occurred while inserting data.' });
    }
};

const updateData = async (req, res) => {
    try {
        const { store_id, storeName, location } = req.body;
        console.log(req.body);

        const affectedRows = await update(store_id, storeName, location);

        if (affectedRows === 1) {
            res.status(200).json({ message: 'Data updated successfully' });
        } else {
            res.status(404).json({ error: 'Data not found or not updated' });
        }
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'An error occurred while updating data.' });
    }
};

const deleteData = async(req,res) => {
    try {
        const { store_id } = req.params;

        const affectedRows = await deleting(store_id);

        if (affectedRows === 1) {
            res.status(200).json({ message: 'Data deleted successfully' });
        } else {
            res.status(404).json({ error: 'Data not found or not deleted' });
        }
    } catch (error) {
        console.error('Error while deleting data:', error);
        res.status(500).json({ error: 'An error occurred while deleting data' });
    }
}

const readData = async (req, res) => {
    try {
        const activeData = await reading();
        res.status(200).json(activeData);

    } catch (error) {
        console.error('Error while retrieving active data:', error);
        res.status(500).json({ error: 'An error occurred while retrieving active data' });
    }
};



module.exports = {insertData,updateData,deleteData,readData};