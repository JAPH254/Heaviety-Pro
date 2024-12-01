import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./Error.scss";

function Error({ statusText, message }) {
  return (
    <div className="error-container">
      <div className="error-content">
        <p className="error-code">404</p>
        {/* Escaped single quote */}
        <h1 className="error-message">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </h1>
        {(statusText || message) && (
          <p className="error-detail">{statusText || message}</p>
        )}
        <div className="error-actions">
          <Link to="/" className="error-action">
            <ArrowLeft size={24} className="error-icon" />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
