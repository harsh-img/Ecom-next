import React from "react";

const Crm = () => {
  return (
    <>
      <div className="content-wrapper">
        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row g-6 mb-6">
            {/* Congratulations card */}
            <div className="col-xxl-4">
              <div className="card h-100">
                <div className="card-body text-nowrap">
                  <h5 className="card-title mb-1">
                    Congratulations <span className="fw-bold">Norris!</span> 🎉
                  </h5>
                  <p className="card-subtitle mb-3">Best seller of the month</p>
                  <h4 className="text-primary mb-0">$42.8k</h4>
                  <p className="mb-3">78% of target 🚀</p>
                  <a href="javascript:;" className="btn btn-sm btn-primary">
                    View Sales
                  </a>
                </div>
                <img
                  src="/img/illustrations/trophy.png"
                  className="position-absolute bottom-0 end-0 me-4"
                  width={100}
                  alt="view sales"
                />
              </div>
            </div>
            {/*/ Congratulations card */}
            {/* Total Profit */}
            <div className="col-xxl-2 col-md-3 col-sm-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <div className="avatar">
                      <div className="avatar-initial bg-label-primary rounded-3">
                        <i className="icon-base ri ri-shopping-cart-2-line icon-24px" />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 text-success">+22%</p>
                      <i className="icon-base ri ri-arrow-up-s-line text-success icon-sm" />
                    </div>
                  </div>
                  <div className="card-info mt-5">
                    <h5 className="mb-1">155k</h5>
                    <p>Total Orders</p>
                    <div className="badge bg-label-secondary rounded-pill">
                      Last 4 Month
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Total Profit */}
            {/* Total Expenses */}
            <div className="col-xxl-2 col-md-3 col-sm-6">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <div className="avatar">
                      <div className="avatar-initial bg-label-success rounded-3">
                        <i className="icon-base ri ri-handbag-line icon-24px" />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 text-success">+38%</p>
                      <i className="icon-base ri ri-arrow-up-s-line text-success icon-sm" />
                    </div>
                  </div>
                  <div className="card-info mt-5">
                    <h5 className="mb-1">$13.4k</h5>
                    <p>Total Sales</p>
                    <div className="badge bg-label-secondary rounded-pill">
                      Last Six Month
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Total Expenses */}
            {/* Total Profit chart */}
            <div className="col-xxl-2 col-md-3 col-sm-6">
              <div className="card h-100">
                <div className="card-header">
                  <div className="d-flex align-items-center mb-1 flex-wrap">
                    <h5 className="mb-0 me-1">$88.5k</h5>
                    <p className="mb-0 text-danger">-18%</p>
                  </div>
                  <span className="d-block card-subtitle">Total Profit</span>
                </div>
                <div className="card-body">
                  <div id="totalProfitChart" />
                </div>
              </div>
            </div>
            {/*/ Total Profit chart */}
            {/* Total Growth chart */}
            <div className="col-xxl-2 col-md-3 col-sm-6">
              <div className="card h-100">
                <div className="card-header">
                  <div className="d-flex align-items-center mb-1 flex-wrap">
                    <h5 className="mb-0 me-1">$27.9k</h5>
                    <p className="mb-0 text-success">+16%</p>
                  </div>
                  <span className="d-block card-subtitle">Total Growth</span>
                </div>
                <div className="card-body">
                  <div id="totalGrowthChart" />
                </div>
              </div>
            </div>
            {/*/ Total Sales chart */}
          </div>
          <div className="row g-6">
            {/* Organic Sessions Chart*/}
            <div className="col-lg-4 col-md-6 order-1 order-lg-0">
              <div className="card h-100">
                <div className="card-header pb-1">
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-1">Organic Sessions</h5>
                    <div className="dropdown">
                      <button
                        className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-1"
                        type="button"
                        id="organicSessionsDropdown"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="icon-base ri ri-more-2-line" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="organicSessionsDropdown"
                      >
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last 28 Days
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Year
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div id="organicSessionsChart" />
                </div>
              </div>
            </div>
            {/*/ Organic Sessions Chart*/}
            {/* Project Timeline Chart*/}
            <div className="col-lg-8 col-12">
              <div className="card h-100">
                <div className="row">
                  <div className="col-md-8 col-12 order-2 order-md-0">
                    <div className="card-header">
                      <h5 className="mb-1">Project Timeline</h5>
                      <p className="mb-0 card-subtitle">
                        Total 840 Task Completed
                      </p>
                    </div>
                    <div className="card-body px-2 pt-xl-7">
                      <div id="projectTimelineChart" />
                    </div>
                  </div>
                  <div className="col-md-4 col-12 border-start">
                    <div className="card-header">
                      <div className="d-flex justify-content-between">
                        <h5 className="mb-1">Project List</h5>
                        <div className="dropdown">
                          <button
                            className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-1"
                            type="button"
                            id="projectTimeline"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="icon-base ri ri-more-2-line" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="projectTimeline"
                          >
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Refresh
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Share
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Update
                            </a>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 card-subtitle">4 Ongoing Project</p>
                    </div>
                    <div className="card-body pt-4">
                      <div className="d-flex align-items-center mb-6">
                        <div className="avatar">
                          <div className="avatar-initial bg-label-primary rounded">
                            <i className="icon-base ri ri-smartphone-line icon-24px" />
                          </div>
                        </div>
                        <div className="ms-3 d-flex flex-column">
                          <h6 className="mb-1">IOS Application</h6>
                          <small>Task 840/2.5K</small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-6">
                        <div className="avatar">
                          <div className="avatar-initial bg-label-success rounded">
                            <i className="icon-base ri ri-sparkling-2-fill icon-24px" />
                          </div>
                        </div>
                        <div className="ms-3 d-flex flex-column">
                          <h6 className="mb-1">Web Application</h6>
                          <small>Task 99/1.42k</small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-6">
                        <div className="avatar">
                          <div className="avatar-initial bg-label-secondary rounded">
                            <i className="icon-base ri ri-bank-card-2-line icon-24px" />
                          </div>
                        </div>
                        <div className="ms-3 d-flex flex-column">
                          <h6 className="mb-1">Bank Dashboard</h6>
                          <small>Task 58/100</small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="avatar">
                          <div className="avatar-initial bg-label-info rounded">
                            <i className="icon-base ri ri-pencil-ruler-2-line icon-24px" />
                          </div>
                        </div>
                        <div className="ms-3 d-flex flex-column">
                          <h6 className="mb-1">UI Kit Design</h6>
                          <small>Task 120/350</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Project Timeline Chart*/}
            {/* Weekly Overview Chart */}
            <div className="col-xxl-4 col-md-6">
              <div className="card h-100">
                <div className="card-header">
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-0">Weekly Overview</h5>
                    <div className="dropdown">
                      <button
                        className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-1"
                        type="button"
                        id="weeklyOverviewDropdown"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="icon-base ri ri-more-2-line" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="weeklyOverviewDropdown"
                      >
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last 28 Days
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Year
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div id="weeklyOverviewChart" />
                  <div className="mt-6">
                    <div className="d-flex align-items-center gap-4">
                      <h4 className="mb-0">62%</h4>
                      <p className="mb-0">
                        Your sales performance is 35% 😎 better compared to last
                        month
                      </p>
                    </div>
                    <div className="d-grid mt-6">
                      <button className="btn btn-primary" type="button">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Weekly Overview Chart */}
            {/* Social Network Visits */}
            <div className="col-xxl-4 col-md-6">
              <div className="card h-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="card-title m-0 me-2">Social Network Visits</h5>
                  <div className="dropdown">
                    <button
                      className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-1"
                      type="button"
                      id="socialNetworkList"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="icon-base ri ri-more-2-line" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="socialNetworkList"
                    >
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last 28 Days
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Year
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="mb-7">
                    <div className="d-flex align-items-center">
                      <h4 className="mb-0">$24,895</h4>
                      <span className="text-success ms-2">
                        <i className="icon-base ri ri-arrow-up-s-line" />
                        <span>62%</span>
                      </span>
                    </div>
                    <p className="mb-0">Last 1 Year Visits</p>
                  </div>
                  <ul className="p-0 m-0">
                    <li className="d-flex align-items-center mb-4">
                      <div className="flex-shrink-0">
                        <img
                          src="/img/icons/brands/facebook-rounded.png"
                          alt="facebook"
                          className="me-3"
                          height={34}
                        />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-1">Facebook</h6>
                          <p className="mb-0">Social Media</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="h6 mb-0">12,348</span>
                          <div className="ms-2 badge bg-label-success rounded-pill">
                            +12%
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <div className="flex-shrink-0">
                        <img
                          src="/img/icons/brands/dribbble-rounded.png"
                          alt="dribbble"
                          className="me-3"
                          height={34}
                        />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-1">Dribbble</h6>
                          <p className="mb-0">Community</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="h6 mb-0">8,450</span>
                          <div className="ms-2 badge bg-label-success rounded-pill">
                            +32%
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src="/img/icons/brands/instagram-rounded.png"
                          alt="instagram"
                          className="me-3"
                          height={34}
                        />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-1">Instagram</h6>
                          <p className="mb-0">Social Media</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="h6 mb-0">25,566</span>
                          <div className="ms-2 badge bg-label-success rounded-pill">
                            +42%
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*/ Social Network Visits */}
            {/* Monthly Budget Chart*/}
            <div className="col-xxl-4 col-md-6">
              <div className="card h-100">
                <div className="card-header">
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-1">Monthly Budget</h5>
                    <div className="dropdown">
                      <button
                        className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-1"
                        type="button"
                        id="monthlyBudgetDropdown"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="icon-base ri ri-more-2-line" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="monthlyBudgetDropdown"
                      >
                        <a className="dropdown-item" href="javascript:void(0);">
                          Refresh
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Update
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Share
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-xl-6">
                  <div id="monthlyBudgetChart" />
                  <div className="mt-4">
                    <p className="mb-0">
                      Last month you had $2.42 expense transactions, 12 savings
                      entries and 4 bills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Monthly Budget Chart*/}
            {/* Meeting Schedule */}
            <div className="col-xxl-4 col-md-6">
              <div className="card h-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="card-title m-0 me-2">Meeting Schedule</h5>
                  <div className="dropdown">
                    <button
                      className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-1"
                      type="button"
                      id="meetingSchedule"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="icon-base ri ri-more-2-line" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="meetingSchedule"
                    >
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last 28 Days
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Year
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="p-0 m-0">
                    <li className="d-flex align-items-center mb-6">
                      <div className="avatar flex-shrink-0 me-4">
                        <img
                          src="/img/avatars/4.png"
                          alt="avatar"
                          className="rounded-3"
                        />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-0">Call with Woods</h6>
                          <small className="d-flex align-items-center">
                            <i className="icon-base ri ri-calendar-line icon-16px" />
                            <span className="ms-2">21 Jul | 08:20-10:30</span>
                          </small>
                        </div>
                        <div className="badge bg-label-primary rounded-pill">
                          Business
                        </div>
                      </div>
                    </li>
                    <li className="d-flex align-items-center mb-6">
                      <div className="avatar flex-shrink-0 me-4">
                        <img
                          src="/img/avatars/5.png"
                          alt="avatar"
                          className="rounded-3"
                        />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-0">Conference call</h6>
                          <small className="d-flex align-items-center">
                            <i className="icon-base ri ri-calendar-line icon-16px" />
                            <span className="ms-2">21 Jul | 08:20-10:30</span>
                          </small>
                        </div>
                        <div className="badge bg-label-warning rounded-pill">
                          Dinner
                        </div>
                      </div>
                    </li>
                    <li className="d-flex align-items-center mb-6">
                      <div className="avatar flex-shrink-0 me-4">
                        <img
                          src="/img/avatars/3.png"
                          alt="avatar"
                          className="rounded-3"
                        />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-0">Meeting with Mark</h6>
                          <small className="d-flex align-items-center">
                            <i className="icon-base ri ri-calendar-line icon-16px" />
                            <span className="ms-2">21 Jul | 08:20-10:30</span>
                          </small>
                        </div>
                        <div className="badge bg-label-secondary rounded-pill">
                          Meetup
                        </div>
                      </div>
                    </li>
                    <li className="d-flex align-items-center mb-6">
                      <div className="avatar flex-shrink-0 me-4">
                        <img
                          src="/img/avatars/14.png"
                          alt="avatar"
                          className="rounded-3"
                        />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-0">Meeting in Oakland</h6>
                          <small className="d-flex align-items-center">
                            <i className="icon-base ri ri-calendar-line icon-16px" />
                            <span className="ms-2">21 Jul | 08:20-10:30</span>
                          </small>
                        </div>
                        <div className="badge bg-label-danger rounded-pill">
                          Dinner
                        </div>
                      </div>
                    </li>
                    <li className="d-flex align-items-center mb-6">
                      <div className="avatar flex-shrink-0 me-4">
                        <img
                          src="/img/avatars/8.png"
                          alt="avatar"
                          className="rounded-3"
                        />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-0">Call with hilda</h6>
                          <small className="d-flex align-items-center">
                            <i className="icon-base ri ri-calendar-line icon-16px" />
                            <span className="ms-2">21 Jul | 08:20-10:30</span>
                          </small>
                        </div>
                        <div className="badge bg-label-success rounded-pill">
                          Meditation
                        </div>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="avatar flex-shrink-0 me-4">
                        <img
                          src="/img/avatars/1.png"
                          alt="avatar"
                          className="rounded-3"
                        />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <h6 className="mb-0">Meeting with Carl</h6>
                          <small className="d-flex align-items-center">
                            <i className="icon-base ri ri-calendar-line icon-16px" />
                            <span className="ms-2">21 Jul | 08:20-10:30</span>
                          </small>
                        </div>
                        <div className="badge bg-label-primary rounded-pill">
                          Business
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*/ Meeting Schedule */}
            {/* External Links Chart */}
            <div className="col-xxl-4 col-md-6">
              <div className="card h-100">
                <div className="card-header">
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-1">External Links</h5>
                    <div className="dropdown">
                      <button
                        className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-1"
                        type="button"
                        id="externalLinksDropdown"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="icon-base ri ri-more-2-line" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="externalLinksDropdown"
                      >
                        <a className="dropdown-item" href="javascript:void(0);">
                          Refresh
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Update
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Share
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div id="externalLinksChart" />
                  <div className="table-responsive text-nowrap">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <td className="text-start pb-0 ps-0">
                            <div className="d-flex align-items-center">
                              <i className="icon-base ri ri-circle-fill icon-14px text-primary me-2" />
                              <h6 className="mb-0 small">Google Analytics</h6>
                            </div>
                          </td>
                          <td className="pb-0">
                            <p className="mb-0 small">$845k</p>
                          </td>
                          <td className="pe-0 pb-0">
                            <div className="d-flex align-items-center justify-content-end">
                              <h6 className="mb-0 me-2 small">82%</h6>
                              <i className="icon-base ri ri-arrow-down-s-line text-danger icon-24px" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start pb-0 ps-0">
                            <div className="d-flex align-items-center">
                              <i className="icon-base ri ri-circle-fill icon-14px text-primary me-2" />
                              <h6 className="mb-0 small">Facebook Ads</h6>
                            </div>
                          </td>
                          <td className="pb-0">
                            <p className="mb-0 small">$12.5k</p>
                          </td>
                          <td className="pe-0 pb-0">
                            <div className="d-flex align-items-center justify-content-end">
                              <h6 className="mb-0 me-2 small">52%</h6>
                              <i className="icon-base ri ri-arrow-up-s-line text-success icon-24px" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/*/ External Links Chart */}
            {/* Payment History */}
            <div className="col-xxl-4 col-md-6">
              <div className="card h-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="card-title m-0 me-2">Payment History</h5>
                  <div className="dropdown">
                    <button
                      className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-1"
                      type="button"
                      id="paymentHistory"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="icon-base ri ri-more-2-line" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="paymentHistory"
                    >
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last 28 Days
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Year
                      </a>
                    </div>
                  </div>
                </div>
                <div className="table-responsive text-nowrap">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="bg-transparent border-bottom py-4 fs-xsmall fw-normal">
                          Card
                        </th>
                        <th className="text-center bg-transparent border-bottom py-4 fs-xsmall fw-normal">
                          Date
                        </th>
                        <th className="text-end bg-transparent border-bottom py-4 fs-xsmall fw-normal">
                          Spend
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="d-flex align-items-center py-2">
                          <div className="rounded-3 bg-light-gray d-flex align-items-center h-px-30">
                            <img
                              src="//img/icons/payments/visa-light.png"
                              width={46}
                              alt="visa-card"
                              data-app-light-img="icons/payments/visa-light.png"
                              data-app-dark-img="icons/payments/visa-dark.png"
                            />
                          </div>
                          <div className="ms-4">
                            <h6 className="mb-0">*4399</h6>
                            <small>Credit Card</small>
                          </div>
                        </td>
                        <td className="small text-center py-2">05/Jan</td>
                        <td className="text-end py-2">
                          <div className="ms-2">
                            <h6 className="mb-0">-$2,820</h6>
                            <small>$10,450</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center py-2">
                          <div className="rounded-3 bg-light-gray d-flex align-items-center h-px-30">
                            <img
                              src="//img/icons/payments/master-light.png"
                              width={46}
                              alt="master-card"
                              data-app-light-img="icons/payments/master-light.png"
                              data-app-dark-img="icons/payments/master-dark.png"
                            />
                          </div>
                          <div className="ms-4">
                            <h6 className="mb-0">*5545</h6>
                            <small>Debit Card</small>
                          </div>
                        </td>
                        <td className="small text-center py-2">12/Feb</td>
                        <td className="text-end py-2">
                          <div className="ms-2">
                            <h6 className="mb-0">-$345</h6>
                            <small>$8,709</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center py-2">
                          <div className="px-1 rounded-3 bg-light-gray d-flex align-items-center h-px-30">
                            <img
                              src="//img/icons/payments/ae-light.png"
                              width={46}
                              alt="american-express-card"
                              data-app-light-img="icons/payments/ae-light.png"
                              data-app-dark-img="icons/payments/ae-dark.png"
                            />
                          </div>
                          <div className="ms-4">
                            <h6 className="mb-0">*9860</h6>
                            <small>ATM Card</small>
                          </div>
                        </td>
                        <td className="small text-center py-2">24/Feb</td>
                        <td className="text-end py-2">
                          <div className="ms-2">
                            <h6 className="mb-0">-$999</h6>
                            <small>$25,900</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center py-2">
                          <div className="rounded-3 bg-light-gray d-flex align-items-center h-px-30">
                            <img
                              src="//img/icons/payments/visa-light.png"
                              width={46}
                              alt="visa-card"
                              data-app-light-img="icons/payments/visa-light.png"
                              data-app-dark-img="icons/payments/visa-dark.png"
                            />
                          </div>
                          <div className="ms-4">
                            <h6 className="mb-0">*4300</h6>
                            <small>Credit Card</small>
                          </div>
                        </td>
                        <td className="small text-center py-2">08/Mar</td>
                        <td className="text-end py-2">
                          <div className="ms-2">
                            <h6 className="mb-0">-$8,453</h6>
                            <small>$9,233</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center py-2">
                          <div className="rounded-3 bg-light-gray d-flex align-items-center h-px-30">
                            <img
                              src="//img/icons/payments/master-light.png"
                              width={46}
                              alt="master-card"
                              data-app-light-img="icons/payments/master-light.png"
                              data-app-dark-img="icons/payments/master-dark.png"
                            />
                          </div>
                          <div className="ms-4">
                            <h6 className="mb-0">*5545</h6>
                            <small>Debit Card</small>
                          </div>
                        </td>
                        <td className="small text-center py-2">15/Apr</td>
                        <td className="text-end py-2">
                          <div className="ms-2">
                            <h6 className="mb-0">-$24</h6>
                            <small>$500</small>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center py-2">
                          <div className="rounded-3 bg-light-gray d-flex align-items-center h-px-30">
                            <img
                              src="//img/icons/payments/visa-light.png"
                              width={46}
                              alt="visa-card"
                              data-app-light-img="icons/payments/visa-light.png"
                              data-app-dark-img="icons/payments/visa-dark.png"
                            />
                          </div>
                          <div className="ms-4">
                            <h6 className="mb-0">*4399</h6>
                            <small>Credit Card</small>
                          </div>
                        </td>
                        <td className="small text-center py-2">28/Apr</td>
                        <td className="text-end py-2">
                          <div className="ms-2">
                            <h6 className="mb-0">-$299</h6>
                            <small>$1,380</small>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*/ Payment History */}
            {/* Most Sales in Countries */}
            <div className="col-lg-4 col-md-6 order-2 order-lg-0">
              <div className="card h-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="card-title m-0 me-2">
                    Most Sales in Countries
                  </h5>
                  <div className="dropdown">
                    <button
                      className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-1"
                      type="button"
                      id="mostSales"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="icon-base ri ri-more-2-line" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="mostSales"
                    >
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last 28 Days
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Month
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Last Year
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body pb-1 pt-0">
                  <div className="mb-6 mt-1">
                    <div className="d-flex align-items-center">
                      <h1 className="mb-0 me-2">$24,895</h1>
                      <div className="badge bg-label-success rounded-pill">
                        +42%
                      </div>
                    </div>
                    <p className="mt-0">Sales Last 90 Days</p>
                  </div>
                  <div className="table-responsive text-nowrap border-top">
                    <table className="table">
                      <tbody className="table-border-bottom-0">
                        <tr>
                          <td className="ps-0 pe-12 py-4">
                            <span className="text-heading">Australia</span>
                          </td>
                          <td className="text-end py-4">
                            <span className="text-heading fw-medium">
                              18,879
                            </span>
                          </td>
                          <td className="pe-0 py-4">
                            <div className="d-flex align-items-center justify-content-end">
                              <span className="text-heading fw-medium me-2">
                                15%
                              </span>
                              <i className="icon-base ri ri-arrow-down-s-line icon-24px text-danger" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="ps-0 pe-12 py-4">
                            <span className="text-heading">Canada</span>
                          </td>
                          <td className="text-end py-4">
                            <span className="text-heading fw-medium">
                              10,357
                            </span>
                          </td>
                          <td className="pe-0 py-4">
                            <div className="d-flex align-items-center justify-content-end">
                              <span className="text-heading fw-medium me-2">
                                85%
                              </span>
                              <i className="icon-base ri ri-arrow-up-s-line icon-24px text-success" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="ps-0 pe-12 py-4">
                            <span className="text-heading">India</span>
                          </td>
                          <td className="text-end py-4">
                            <span className="text-heading fw-medium">
                              4,860
                            </span>
                          </td>
                          <td className="pe-0 py-4">
                            <div className="d-flex align-items-center justify-content-end">
                              <span className="text-heading fw-medium me-2">
                                48%
                              </span>
                              <i className="icon-base ri ri-arrow-up-s-line icon-24px text-success" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="ps-0 pe-12 py-4">
                            <span className="text-heading">United State</span>
                          </td>
                          <td className="text-end py-4">
                            <span className="text-heading fw-medium">899</span>
                          </td>
                          <td className="pe-0 py-4">
                            <div className="d-flex align-items-center justify-content-end">
                              <span className="text-heading fw-medium me-2">
                                16%
                              </span>
                              <i className="icon-base ri ri-arrow-down-s-line icon-24px text-danger" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="ps-0 pe-12 py-4">
                            <span className="text-heading">Brazil</span>
                          </td>
                          <td className="text-end py-4">
                            <span className="text-heading fw-medium">18</span>
                          </td>
                          <td className="pe-0 py-4">
                            <div className="d-flex align-items-center justify-content-end">
                              <span className="text-heading fw-medium me-2">
                                12%
                              </span>
                              <i className="icon-base ri ri-arrow-up-s-line icon-24px text-success" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/*/ Most Sales in Countries */}
            {/* Data Tables */}
            <div className="col-xl-8 col-md-6">
              <div className="card overflow-hidden">
                <div className="table-responsive">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th className="text-truncate">User</th>
                        <th className="text-truncate">Email</th>
                        <th className="text-truncate">Role</th>
                        <th className="text-truncate">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-4">
                              <img
                                src="/img/avatars/1.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Jordan Stevenson
                              </h6>
                              <small className="text-truncate">@amiccoo</small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">
                          susanna.Lind57@gmail.com
                        </td>
                        <td className="text-truncate">
                          <div className="d-flex align-items-center">
                            <i className="icon-base ri ri-vip-crown-line icon-22px text-primary me-2" />
                            <span>Admin</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-label-warning rounded-pill">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-4">
                              <img
                                src="/img/avatars/3.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Benedetto Rossiter
                              </h6>
                              <small className="text-truncate">
                                @brossiter15
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">
                          estelle.Bailey10@gmail.com
                        </td>
                        <td className="text-truncate">
                          <div className="d-flex align-items-center">
                            <i className="icon-base ri ri-edit-box-line text-warning icon-22px me-2" />
                            <span>Editor</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-label-success rounded-pill">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-4">
                              <img
                                src="/img/avatars/2.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Bentlee Emblin
                              </h6>
                              <small className="text-truncate">@bemblinf</small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">milo86@hotmail.com</td>
                        <td className="text-truncate">
                          <div className="d-flex align-items-center">
                            <i className="icon-base ri ri-computer-line text-danger icon-22px me-2" />
                            <span>Author</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-label-success rounded-pill">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-4">
                              <img
                                src="/img/avatars/5.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Bertha Biner
                              </h6>
                              <small className="text-truncate">@bbinerh</small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">lonnie35@hotmail.com</td>
                        <td className="text-truncate">
                          <div className="d-flex align-items-center">
                            <i className="icon-base ri ri-edit-box-line text-warning icon-22px me-2" />
                            <span>Editor</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-label-warning rounded-pill">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-4">
                              <img
                                src="/img/avatars/4.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Beverlie Krabbe
                              </h6>
                              <small className="text-truncate">
                                @bkrabbe1d
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">
                          ahmad_Collins@yahoo.com
                        </td>
                        <td className="text-truncate">
                          <div className="d-flex align-items-center">
                            <i className="icon-base ri ri-pie-chart-2-line icon-22px text-info me-2" />
                            <span>Maintainer</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-label-secondary rounded-pill">
                            Inactive
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-4">
                              <img
                                src="/img/avatars/7.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Bradan Rosebotham
                              </h6>
                              <small className="text-truncate">
                                @brosebothamz
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">
                          tillman.Gleason68@hotmail.com
                        </td>
                        <td className="text-truncate">
                          <div className="d-flex align-items-center">
                            <i className="icon-base ri ri-edit-box-line text-warning icon-22px me-2" />
                            <span>Editor</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-label-warning rounded-pill">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm me-4">
                              <img
                                src="/img/avatars/6.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="mb-0 text-truncate">
                                Bree Kilday
                              </h6>
                              <small className="text-truncate">@bkildayr</small>
                            </div>
                          </div>
                        </td>
                        <td className="text-truncate">otho21@gmail.com</td>
                        <td className="text-truncate">
                          <div className="d-flex align-items-center">
                            <i className="icon-base ri ri-user-3-line icon-22px text-success me-2" />
                            <span>Subscriber</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-label-success rounded-pill">
                            Active
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*/ Data Tables */}
          </div>
        </div>
        <div className="content-backdrop fade" />
      </div>
    </>
  );
};

export default Crm;
