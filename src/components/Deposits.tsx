import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const randomNumber = Math.random() * (13000 - 2468) + 2468;

export default function Deposits() {
  return (
    <>
      <Title>Recent Movement</Title>
      <Typography component="p" variant="h4">
        {formatter.format(randomNumber)}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 9 December, 2021
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </>
  );
}
