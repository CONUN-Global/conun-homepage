import { Trans } from "@lingui/macro";
import styles from "./ContactCard.module.scss";

interface Props {
  internal: boolean;
  name?: JSX.Element;
  department?: JSX.Element;
  email?: JSX.Element;
  homepage?: JSX.Element;
  phone?: JSX.Element;
  address?: JSX.Element;
  task?: JSX.Element;
}
function ContactCard({
  internal,
  name,
  department,
  email,
  task,
  homepage,
  phone,
  address,
}: Props) {
  if (internal) {
    return (
      <div className={styles.Card}>
        <p>
          <Trans id="Personal Information Manager " />
        </p>
        <p>
          <Trans id="Name: " />
          {name}
        </p>
        <p>
          <Trans id="Department: " />
          {department}
        </p>
        <p>
          <Trans id="Email: " />
          {email}
        </p>
      </div>
    );
  }
  return (
    <div className={styles.Card}>
      <p>
        <Trans id="Related Task: " />
        {task}
      </p>
      <p>
        <Trans id="Homepage: " />
        {homepage}
      </p>
      <p>
        <Trans id="Phone: " />
        {phone}
      </p>
      <p>
        <Trans id="Address: " />
        {address}
      </p>
    </div>
  );
}
export default ContactCard;
