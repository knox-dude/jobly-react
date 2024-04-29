import { Card, CardBody, CardTitle, CardText } from "reactstrap"
import { Job } from "@/types";
import { useNavigate } from "react-router-dom";

function JobCard({id, title, salary, equity}: Job) {

  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/jobs/${id}`)} style={{cursor:"pointer"}} className="job-card flex-row m-2">
      <CardBody className="job-card-body">
        <CardTitle tag="h6">{title}</CardTitle>
        <CardText>Salary: {salary}<br></br>Equity: {equity}</CardText>
      </CardBody>
    </Card>
  );
}



export default JobCard;