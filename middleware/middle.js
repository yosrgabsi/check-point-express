const AddDate=(req,res,next)=>{
 const date=new Date();
  req.date = date;
const hour = date.getHours();
const dayOfWeek = date.getDay();
if(dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17){
    req.date=date;

next();
}
else {
  res.send("The web application is only available during working hours (Monday to Friday, from 9 to 17)");
}
};

module.exports= AddDate