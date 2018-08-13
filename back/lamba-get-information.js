var parametros = {
        Filters : [
         {
         Name: 'private-ip-address',
         Values: [res.a],
         }
         ]
};

    
    
ec2.describeInstances(parametros,function (err, data) {    
var msg1= {
	Status_Fail: 'error',
	Status_OK: 'ok'
	};
var Information= {
	Instance_Name: 'none',
	Instance_Status: 'none',
	Instance_Id: 'none',
	Instance_IP: 'none'
	};

  if (err) 
   {
     console.log(err, err.stack); // an error occurred
     callback(null,msg1.Status_Fail);
   }
 
  else   {
    console.log(data);
    Information.Instance_Name = data.Reservations["0"].Instances["0"].InstanceId;
    Information.Instance_Status = data.Reservations["0"].Instances["0"].State.Name;
    Information.Instance_Id = data.Reservations["0"].Instances["0"].InstanceId;
    Information.Instance_IP = data.Reservations["0"].Instances["0"].PrivateIpAddress;
    callback(null, Information);
  }
 context.done(err,data);

   
});

};
