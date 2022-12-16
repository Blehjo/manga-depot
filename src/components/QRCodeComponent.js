import { Fragment } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";

const QRCodeComponent = () => {
    const { profile } = useParams();
    const value= `https://shellgeist.com/${profile}`;

    return (
        <Fragment>
            <QRCode
                style={{ width: "50%" }}
                value={value}
            />
        </Fragment>
    );
}

export default QRCodeComponent;