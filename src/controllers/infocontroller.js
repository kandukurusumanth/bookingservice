const express = require('express');
async function check(req,res){
    try {
        return res.json({
            success:true,
            message:"ok"
        })
    } catch (error) {
        throw error
    }
}
module.exports={
    check
}