const drugRouter = require('express').Router();
const { Op } = require('sequelize')
const { Drug } = require('../models');

const fs = require('fs');
const csv = require('csv-parser');
const loadData = async () => {
    await fs.createReadStream('./drugs.csv')
        .pipe(csv())
        .on('data', (row) => {
            const drug = new Drug({
                name: row.name,
                common_name: row.common_name,
                active_substance: row.active_substance,
                therapeutic_area: row.therapeutic_area,
                group: row.group
            });
            drug.save()
        })
        .on('end', () => {

        });
}

drugRouter.get('/', async (req, res) => {
    const query = req.query.name
    console.log(query)
    const drugs = await Drug.findAll({
        where: {
            [Op.or]: [{
                name: {
                    [Op.startsWith]: query[0].toLowerCase()+query.slice(1)
                }
            },{
                name: {
                    [Op.startsWith]: query[0].toUpperCase()+query.slice(1)
                }
            },
            {
                common_name: {
                    [Op.startsWith]: query[0].toLowerCase()+query.slice(1)
                }
            },{
                common_name: {
                    [Op.startsWith]: query[0].toUpperCase()+query.slice(1)
                }
            },

            ]
        }
    });
    res.json(drugs);
});

drugRouter.get('/all', async (req,res) =>{
    const drugs= await Drug.findAll({
    })
    res.json(drugs)
})

drugRouter.get('/load', async (req, res) => {
    await loadData()
    res.status(200).send()

})


module.exports = drugRouter