import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <>
      <Title>Recent Movement</Title>
      <Typography component="p" variant="h4">
        $3,024.47
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 7 December, 2021
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </>
  );
}
