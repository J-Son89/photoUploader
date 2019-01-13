module.exports = function(app,db){
    app.post('/picture', (req, res) => {
        console.log(req,res)
        const ImageDataDto = { 
            ImageData: req.body.ImageData,
            CustomerId: req.body.CustomerId,
            FileName: req.body.FileName
        }
        // db.collection('ImageDataDto').insert(ImageDataDto, (err, results) => {
        //     if (err) { 
        //         console.log(err)
        //         // res.send({ 'error': 'An error has occurred' }); 
        //     } else {
        //         console.log(results.ops[0])
        //         res.send(results.ops[0]);
        //     }
        // });
    });
    app.get('/picture', (req, res) => {
        const results = db.collection('ImageDataDto').find() 
        console.log(results)
    });
};