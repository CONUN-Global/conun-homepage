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
  className?: string;
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
          <span>{name}</span>
        </p>
        <p>
          <Trans id="Department: " />
          <span>{department}</span>
        </p>
        <p>
          <Trans id="Email: " />
          <span>{email}</span>
        </p>
      </div>
    );
  }
  return (
    <div className={styles.Card}>
      <p>
        <Trans id="Related Task: " />
        <span>{task}</span>
      </p>
      <p>
        <Trans id="Homepage: " />
        <span>{homepage}</span>
      </p>
      <p>
        <Trans id="Phone: " />
        {phone}
      </p>
      <p>
        <Trans id="Address: " />
        <span>{address}</span>
      </p>
    </div>
  );
}
export default ContactCard;
