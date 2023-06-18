import React from "react";

const CountryCard = (props) => {
 const country = props.country
 if (country === undefined){
  return <h2 className="text-center">Loading...</h2>
 }
  return (
    <div className="container-fluid pt-5 ">
      <div className="main-body"> 
        <div className="row gutters-md">
          <div className="col-md-12">
            <div className="mb-3  bg-gr">
              <h2 className="text-center p-3">{country.name.common.toUpperCase()}</h2>
              {country && (
                <div className="card-body">
                  <div className="row">
                  <img
                    className="p-3"
                    src={country.flags.png}
                    alt={country.name.common}
                  />
                  </div>
                
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="mb-0">Official : </h6>
                    </div>
                    <div className="col-md-6 text-secondary">
                      {country.name.official}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="mb-0">Capital : </h6>
                    </div>
                    <div className="col-md-6 text-secondary">
                      {country.capital}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="mb-0">Population : </h6>
                    </div>
                    <div className="col-md-6 text-secondary">
                      {country.population}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="mb-0">Area : </h6>
                    </div>
                    <div className="col-md-6 text-secondary">
                      {country.area} sqr mtr
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="mb-0">Region : </h6>
                    </div>
                    <div className="col-md-6 text-secondary">
                      {country.region}
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="mb-0">Region : </h6>
                    </div>
                    <div className="col-md-6 text-secondary">
                      {country.region}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
