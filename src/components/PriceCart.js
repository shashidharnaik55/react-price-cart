import React from "react";
import "./PriceCart.css";

function PriceCart(props) {
  let users = (
    <p>
      <i class="fas fa-check"></i> {props.users}
    </p>
  );
  let storage = (
    <p>
      <i class="fas fa-check"></i> {props.storage}
    </p>
  );
  let publicPro = (
    <p>
      <i class="fas fa-check"></i> Unlimited Public Projects
    </p>
  );
  let commAccess = (
    <p>
      <i class="fas fa-check"></i> Community access
    </p>
  );
  let privatePro;
  if (props.private)
    privatePro = (
      <p>
        <i class="fas fa-check"></i> Unlimited Private Projects
      </p>
    );
  else
    privatePro = (
      <p class="muted">
        <i class="fas fa-times"></i> Unlimited Private Projects
      </p>
    );
  let support;
  if (props.support)
    support = (
      <p>
        <i class="fas fa-check"></i> Dedicated Phone Support
      </p>
    );
  else
    support = (
      <p class="muted">
        <i class="fas fa-times"></i> Dedicated Phone Support
      </p>
    );
  let domain;
  if (props.domain)
    domain = (
      <p>
        <i class="fas fa-check"></i>
        <span class="domain-type">{props.domain}</span> Free Subdomain
      </p>
    );
  else
    domain = (
      <p class="muted">
        <i class="fas fa-times"></i> Free Subdomain
      </p>
    );
  let report;
  if (props.report)
    report = (
      <p>
        <i class="fas fa-check"></i> Monthly Status Reports
      </p>
    );
  else
    report = (
      <p class="muted">
        <i class="fas fa-times"></i> Monthly Status Reports
      </p>
    );
  return (
    <div className="card-group">
      <div className="card-header">
        <p>{props.cardType}</p>
      </div>
      <div className="card-price">
        <h1>
          ${props.price}
          <span className="period">/month</span>
        </h1>
      </div>
      <hr />
      <ul>
        <li>{users}</li>
        <li>{storage}</li>
        <li>{publicPro}</li>
        <li>{commAccess}</li>
        <li>{privatePro}</li>
        <li>{support}</li>
        <li>{domain}</li>
        <li>{report}</li>
      </ul>
      <button className="button">Button</button>
    </div>
  );
}

export default PriceCart;
