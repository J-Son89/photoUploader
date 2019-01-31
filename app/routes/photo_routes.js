module.exports = function(app,db){
    app.post('/picture', (req, res) => {
        const ImageDataDto = { 
            ImageData: req.body.ImageData,
            CustomerId: req.body.CustomerId,
            FileName: req.body.FileName
        }
        db.collection('ImageDataDto').insert(ImageDataDto, (err, results) => {
            if (err) { 
                console.log(err)
                // res.send({ 'error': 'An error has occurred' }); 
            } else {
                console.log('--worked, for the wine!!')
                res.send(results);
            }
        });
    });
    app.get('/picture', (req, res) => {
        const results = db.collection('ImageDataDto').find() 
        console.log(results)
    });
    app.get('/start', (req, res) => {
        res.send('hs')
    });
};