import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"
import { Company } from "@/types";
import { useNavigate } from "react-router-dom";


function CompanyCard({handle, name, description, numEmployees, logoUrl}: Company) {

  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/companies/${handle}`)} style={{cursor:"pointer"}} className="company-card flex-row" >
      <CardBody className="w-75">
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted " tag="h6">{description}</CardSubtitle>
        <CardText>Employees: {numEmployees}</CardText>
        <Button href={`/companies/${handle}`}>View</Button>
      </CardBody>

      <img className="w-25 img-fluid" src={logoUrl} alt={name} />
    </Card>
  )
}


export default CompanyCard;
