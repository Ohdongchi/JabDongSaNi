const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get('/', (req,res)=>{
    res.json([
        {
            "id":1,
            "username":"Oh"
        },
        {
            "id":2,
            "username":"Kim"
        }
    ]);
    // console.log(data);
});
router.get('/patients', (req,res)=>{
    res.json(
        [
            {
                "id":1,
                "patients":1,
                "area":"부천",
                "write_day":"2020-11-03"
            },
            {
                "id":2,
                "patients":2,
                "area":"부천",
                "write_day":"2020-11-03"
            },
            {
                "id":3,
                "patients":1,
                "area":"안산",
                "write_day":"2020-11-03"
            },
            {
                "id":4,
                "patients":1,
                "area":"시흥",
                "write_day":"2020-11-03"
            },
            {
                "id":5,
                "patients":1,
                "area":"포천",
                "write_day":"2020-11-03"
            },
            {
                "id":6,
                "patients":1,
                "area":"광명",
                "write_day":"2020-11-03"
            },
            {
                "id":7,
                "patients":1,
                "area":"서울시 구로구",
                "write_day":"2020-11-03"
            },
            {
                "id":8,
                "patients":1,
                "area":"속초",
                "write_day":"2020-11-03"
            },
            {
                "id":9,
                "patients":1,
                "area":"강릉",
                "write_day":"2020-11-03"
            },
            {
                "id":10,
                "patients":2,
                "area":"강릉",
                "write_day":"2020-11-03"
            },
            {
                "id":11,
                "patients":2,
                "area":"광명",
                "write_day":"2020-11-03"
            },

        ]
    );
});
module.exports=router;