/////////////////////////////////////////////////////////
///////////////   Stop  Instances Carvajal Back ////////
////////////////////////////////////////////////////////


var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
AWS.config.apiVersions={ ec2: '2016-11-15'};

console.log('Loading the GetInformation FunctiON');

var ec2 = new AWS.EC2();

exports.handler = function(event, context, callback) {
console.log('Received event:', JSON.stringify(event, null, 2));
   
  if (event.a === undefined) {
   callback("400 Invalid Input");
     }
 var res = {};
 var id_in= res.a;
 res.a = event.a;
 
var parametros = {
       InstanceIds: [res.a],
};
    
    
ec2.stopInstances(parametros,function (err, data) {    
  if (err) console.log(err, err.stack); // an error occurred
  else   {
     console.log(data);

    callback(null, data);
  }
 context.done(err,data);

   
});

};
