import { Card, CardBody, CardTitle, CardText } from "reactstrap"
import { Job } from "@/types";

function JobCard({title, salary, equity}: Job) {
  return (
    <Card className="job-card flex-row">
      <CardBody className="job-card-body">
        <CardTitle tag="h6">{title}</CardTitle>
        <CardText>Salary: {salary}</CardText>
        <CardText>Equity: {equity}</CardText>
      </CardBody>
    </Card>
  );
}



export default JobCard;