import React, { useState } from 'react';
import { BiChevronDown, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {
  usefulSurfaceArray,
  furnishedArray,
  roomsArray,
  commerceTypeArray,
  groundTypeArray,
  landAreaArray,
  builtAreaArray,
  capacityArray,
  typeParkingGarageArray,
  floorArray,
  compartimentTypeArray,
} from '../../utils';

const PropertyFiltersComponent = (props) => {
  const [minUsefulSurfaceSelected, setMinUsefulSurfaceSelected] = useState(
    'From'
  );
  const [maxUsefulSurfaceSelected, setMaxUsefulSurfaceSelected] = useState(
    'To'
  );
  const [minLandAreaSelected, setMinLandAreaSelected] = useState('From');
  const [maxLandAreaSelected, setMaxLandAreaSelected] = useState('To');
  const [minBuiltAreaSelected, setMinBuiltAreaSelected] = useState('From');
  const [maxBuiltAreaSelected, setMaxBuiltAreaSelected] = useState('To');
  const {
    getFilterUrl,
    rooms,
    furnished,
    category,
    commerceType,
    groundType,
    size,
    whichFor,
    addUpperSpace,
    floor,
    compartimentType,
  } = props;

  return (
    <>
      {category === 'deposits' && (
        <>
          <section className="landArea">
            <label className="mb-1">Land Area</label>
            <div className="interval-filter">
              <div className="dropdown-interval" controlid="landArea">
                <button className="dropbtn-interval">
                  {minLandAreaSelected}
                  <span>
                    {minLandAreaSelected === 'From' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ minLandArea: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMinLandAreaSelected('From')}
                        />
                      </Link>
                    )}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {landAreaArray.map((p, index) => (
                    <div>
                      <Link
                        to={getFilterUrl({ minLandArea: p })}
                        key={index}
                        style={{ textDecoration: 'none' }}
                        onClick={() => setMinLandAreaSelected(p)}
                      >
                        {p}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="dropdown-interval" controlid="landArea">
                <button className="dropbtn-interval">
                  {maxLandAreaSelected}
                  <span>
                    {maxLandAreaSelected === 'To' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ maxLandArea: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMaxLandAreaSelected('To')}
                        />
                      </Link>
                    )}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {landAreaArray.map((p, index) => (
                    <Link
                      to={getFilterUrl({ maxLandArea: p })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMaxLandAreaSelected(p)}
                    >
                      {p}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="builtArea">
            <label className="mb-1">Built Area</label>
            <div className="interval-filter">
              <div className="dropdown-interval" controlid="builtArea">
                <button className="dropbtn-interval">
                  {minBuiltAreaSelected}
                  <span>
                    {minBuiltAreaSelected === 'From' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ minBuiltArea: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMinBuiltAreaSelected('From')}
                        />
                      </Link>
                    )}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {builtAreaArray.map((p, index) => (
                    <div>
                      <Link
                        to={getFilterUrl({ minBuiltArea: p })}
                        key={index}
                        style={{ textDecoration: 'none' }}
                        onClick={() => setMinBuiltAreaSelected(p)}
                      >
                        {p}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="dropdown-interval" controlid="builtArea">
                <button className="dropbtn-interval">
                  {maxBuiltAreaSelected}
                  <span>
                    {maxBuiltAreaSelected === 'To' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ maxBuiltArea: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMaxBuiltAreaSelected('To')}
                        />
                      </Link>
                    )}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {builtAreaArray.map((p, index) => (
                    <Link
                      to={getFilterUrl({ maxBuiltArea: p })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMaxBuiltAreaSelected(p)}
                    >
                      {p}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {category === 'parkingGarage' && (
        <>
          <section className="capacity">
            <label className="mb-1">Capacity</label>
            <div className="dropdown" controlid="capacity">
              <button className="dropbtn">
                {addUpperSpace(size)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {capacityArray.map((m, index) => (
                  <Link
                    to={getFilterUrl({ size: m })}
                    style={{ textDecoration: 'none' }}
                    key={index}
                  >
                    {addUpperSpace(m)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="type">
            <label className="mb-1">Type</label>
            <div className="dropdown" controlid="type">
              <button className="dropbtn">
                {addUpperSpace(whichFor)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {typeParkingGarageArray.map((m, index) => (
                  <Link
                    to={getFilterUrl({ whichFor: m })}
                    style={{ textDecoration: 'none' }}
                    key={index}
                  >
                    {addUpperSpace(m)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {(category === 'housesForRent' ||
        category === 'apartmentsForRent' ||
        category === 'housesForSale' ||
        category === 'apartmentsForSale') && (
        <>
          <section className="furnished">
            <label className="mb-1">Furnished</label>
            <div className="dropdown" controlid="furnished">
              <button className="dropbtn">
                {addUpperSpace(furnished)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {furnishedArray.map((m, index) => (
                  <Link
                    to={getFilterUrl({ furnished: m })}
                    style={{ textDecoration: 'none' }}
                    key={index}
                  >
                    {addUpperSpace(m)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="floor">
            <label className="mb-1">Floor</label>
            <div className="dropdown" controlid="floor">
              <button className="dropbtn">
                {addUpperSpace(floor)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {floorArray.map((m, index) => (
                  <Link
                    to={getFilterUrl({ floor: m })}
                    style={{ textDecoration: 'none' }}
                    key={index}
                  >
                    {addUpperSpace(m)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="compartimentType">
            <label className="mb-1">Compartiment Type</label>
            <div className="dropdown" controlid="compartimentType">
              <button className="dropbtn">
                {addUpperSpace(compartimentType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {compartimentTypeArray.map((m, index) => (
                  <Link
                    to={getFilterUrl({ compartimentType: m })}
                    style={{ textDecoration: 'none' }}
                    key={index}
                  >
                    {addUpperSpace(m)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="rooms">
            <label className="mb-1">Rooms</label>
            <div className="dropdown" controlid="rooms">
              <button className="dropbtn">
                {addUpperSpace(rooms)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {roomsArray.map((c, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ rooms: c })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(c)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="usefulSurface">
            <label className="mb-1">Useful Surface</label>
            <div className="interval-filter">
              <div className="dropdown-interval" controlid="usefulSurface">
                <button className="dropbtn-interval">
                  {minUsefulSurfaceSelected}
                  <span>
                    {minUsefulSurfaceSelected === 'From' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ minUsefulSurface: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMinUsefulSurfaceSelected('From')}
                        />
                      </Link>
                    )}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {usefulSurfaceArray.map((e, index) => (
                    <Link
                      to={getFilterUrl({ minUsefulSurface: e })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMinUsefulSurfaceSelected(e)}
                    >
                      {e}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="dropdown-interval" controlid="usefulSurface">
                <button className="dropbtn-interval">
                  {maxUsefulSurfaceSelected}
                  <span>
                    {maxUsefulSurfaceSelected === 'To' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ maxUsefulSurface: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMaxUsefulSurfaceSelected('To')}
                        />
                      </Link>
                    )}{' '}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {usefulSurfaceArray.map((e, index) => (
                    <Link
                      to={getFilterUrl({ maxUsefulSurface: e })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMaxUsefulSurfaceSelected(e)}
                    >
                      {e}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {category === 'officesCommercialSpaces' && (
        <>
          <section className="usefulSurface">
            <label className="mb-1">Useful Surface</label>
            <div className="interval-filter">
              <div className="dropdown-interval" controlid="usefulSurface">
                <button className="dropbtn-interval">
                  {minUsefulSurfaceSelected}
                  <span>
                    {minUsefulSurfaceSelected === 'From' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ minUsefulSurface: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMinUsefulSurfaceSelected('From')}
                        />
                      </Link>
                    )}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {usefulSurfaceArray.map((e, index) => (
                    <Link
                      to={getFilterUrl({ minUsefulSurface: e })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMinUsefulSurfaceSelected(e)}
                    >
                      {e}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="dropdown-interval" controlid="usefulSurface">
                <button className="dropbtn-interval">
                  {maxUsefulSurfaceSelected}
                  <span>
                    {maxUsefulSurfaceSelected === 'To' ? (
                      <BiChevronDown className="icon-style" />
                    ) : (
                      <Link to={getFilterUrl({ maxUsefulSurface: 0 })}>
                        <BiX
                          className="icon-style"
                          onClick={() => setMaxUsefulSurfaceSelected('To')}
                        />
                      </Link>
                    )}{' '}
                  </span>
                </button>
                <div className="dropdown-content-interval">
                  {usefulSurfaceArray.map((e, index) => (
                    <Link
                      to={getFilterUrl({ maxUsefulSurface: e })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMaxUsefulSurfaceSelected(e)}
                    >
                      {e}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="commerceType">
            <label className="mb-1">Commerce Type</label>
            <div className="dropdown" controlid="commerceType">
              <button className="dropbtn">
                {addUpperSpace(commerceType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {commerceTypeArray.map((c, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ commerceType: c })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(c)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {category === 'grounds' && (
        <>
          <section className="groundType">
            <label className="mb-1">Ground Type</label>
            <div className="dropdown" controlid="groundType">
              <button className="dropbtn">
                {addUpperSpace(groundType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {groundTypeArray.map((c, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ groundType: c })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(c)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section className="commerceType">
            <label className="mb-1">Commerce Type</label>
            <div className="dropdown" controlid="commerceType">
              <button className="dropbtn">
                {addUpperSpace(commerceType)}
                <span>
                  <BiChevronDown className="icon-style" />
                </span>
              </button>
              <div className="dropdown-content">
                {commerceTypeArray.map((c, index) => (
                  <Link
                    key={index}
                    to={getFilterUrl({ commerceType: c })}
                    style={{ textDecoration: 'none' }}
                  >
                    {addUpperSpace(c)}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default PropertyFiltersComponent;
