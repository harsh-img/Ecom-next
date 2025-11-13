import React from "react";

const Header = () => {
  return (
    <>
      <nav
        className="layout-navbar container-xxl navbar-detached navbar navbar-expand-xl align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0 d-xl-none">
          <a
            className="nav-item nav-link px-0 me-xl-6"
            href="javascript:void(0)"
          >
            <i className="icon-base ri ri-menu-line icon-22px" />
          </a>
        </div>
        <div
          className="navbar-nav-right d-flex align-items-center justify-content-end"
          id="navbar-collapse"
        >
          {/* Search */}
          <div className="navbar-nav align-items-center">
            <div className="nav-item navbar-search-wrapper mb-0">
              <a
                className="nav-item nav-link search-toggler px-0"
                href="javascript:void(0);"
              >
                <span
                  className="d-inline-block text-body-secondary fw-normal"
                  id="autocomplete"
                />
              </a>
            </div>
          </div>
          {/* /Search */}
          <ul className="navbar-nav flex-row align-items-center ms-md-auto">
            <li className="nav-item dropdown-language dropdown me-sm-2 me-xl-0">
              <a
                className="nav-link dropdown-toggle hide-arrow btn btn-icon btn-text-secondary rounded-pill"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
              >
                <i className="icon-base ri ri-translate-2 icon-22px" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0);"
                    data-language="en"
                    data-text-direction="ltr"
                  >
                    <span>English</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0);"
                    data-language="fr"
                    data-text-direction="ltr"
                  >
                    <span>French</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0);"
                    data-language="ar"
                    data-text-direction="rtl"
                  >
                    <span>Arabic</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0);"
                    data-language="de"
                    data-text-direction="ltr"
                  >
                    <span>German</span>
                  </a>
                </li>
              </ul>
            </li>
            {/*/ Language */}
            {/* Style Switcher */}
            <li className="nav-item dropdown me-sm-2 me-xl-0">
              <a
                className="nav-link dropdown-toggle hide-arrow btn btn-icon btn-text-secondary rounded-pill"
                id="nav-theme"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
              >
                <i className="icon-base ri ri-sun-line icon-22px theme-icon-active" />
                <span className="d-none ms-2" id="nav-theme-text">
                  Toggle theme
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="nav-theme-text"
              >
                <li>
                  <button
                    type="button"
                    className="dropdown-item align-items-center active"
                    data-bs-theme-value="light"
                    aria-pressed="false"
                  >
                    <span>
                      <i
                        className="icon-base ri ri-sun-line icon-22px me-3"
                        data-icon="sun-line"
                      />
                      Light
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item align-items-center"
                    data-bs-theme-value="dark"
                    aria-pressed="true"
                  >
                    <span>
                      <i
                        className="icon-base ri ri-moon-clear-line icon-22px me-3"
                        data-icon="moon-clear-line"
                      />
                      Dark
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item align-items-center"
                    data-bs-theme-value="system"
                    aria-pressed="false"
                  >
                    <span>
                      <i
                        className="icon-base ri ri-computer-line icon-22px me-3"
                        data-icon="computer-line"
                      />
                      System
                    </span>
                  </button>
                </li>
              </ul>
            </li>
            {/* / Style Switcher*/}
            {/* Quick links */}
            <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-sm-2 me-xl-0">
              <a
                className="nav-link dropdown-toggle hide-arrow btn btn-icon btn-text-secondary rounded-pill"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <i className="icon-base ri ri-star-smile-line icon-22px" />
              </a>
              <div className="dropdown-menu dropdown-menu-end p-0">
                <div className="dropdown-menu-header border-bottom">
                  <div className="dropdown-header d-flex align-items-center py-3">
                    <h6 className="mb-0 me-auto">Shortcuts</h6>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-text-secondary rounded-pill btn-icon dropdown-shortcuts-add text-heading"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add shortcuts"
                    >
                      <i className="icon-base ri ri-add-line text-heading" />
                    </a>
                  </div>
                </div>
                <div className="dropdown-shortcuts-list scrollable-container">
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="icon-base ri ri-calendar-line icon-26px text-heading" />
                      </span>
                      <a href="app-calendar.html" className="stretched-link">
                        Calendar
                      </a>
                      <small>Appointments</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="icon-base ri ri-file-text-line icon-26px text-heading" />
                      </span>
                      <a
                        href="app-invoice-list.html"
                        className="stretched-link"
                      >
                        Invoice App
                      </a>
                      <small>Manage Accounts</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="icon-base ri ri-user-line icon-26px text-heading" />
                      </span>
                      <a href="app-user-list.html" className="stretched-link">
                        User App
                      </a>
                      <small>Manage Users</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="icon-base ri ri-computer-line icon-26px text-heading" />
                      </span>
                      <a
                        href="app-access-roles.html"
                        className="stretched-link"
                      >
                        Role Management
                      </a>
                      <small>Permission</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="icon-base ri ri-pie-chart-2-line icon-26px text-heading" />
                      </span>
                      <a href="index.html" className="stretched-link">
                        Dashboard
                      </a>
                      <small>User Dashboard</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="icon-base ri ri-settings-4-line icon-26px text-heading" />
                      </span>
                      <a
                        href="pages-account-settings-account.html"
                        className="stretched-link"
                      >
                        Setting
                      </a>
                      <small>Account Settings</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="icon-base ri ri-question-line icon-26px text-heading" />
                      </span>
                      <a href="pages-faq.html" className="stretched-link">
                        FAQs
                      </a>
                      <small>FAQs &amp; Articles</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                        <i className="icon-base ri ri-tv-2-line icon-26px text-heading" />
                      </span>
                      <a href="modal-examples.html" className="stretched-link">
                        Modals
                      </a>
                      <small>Useful Popups</small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* Quick links */}
            {/* Notification */}
            <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-4 me-xl-1">
              <a
                className="nav-link dropdown-toggle hide-arrow btn btn-icon btn-text-secondary rounded-pill"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <i className="icon-base ri ri-notification-2-line icon-22px" />
                <span className="position-absolute top-0 start-50 translate-middle-y badge badge-dot bg-danger mt-2 border" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end py-0">
                <li className="dropdown-menu-header border-bottom py-50">
                  <div className="dropdown-header d-flex align-items-center py-2">
                    <h6 className="mb-0 me-auto">Notification</h6>
                    <div className="d-flex align-items-center h6 mb-0">
                      <span className="badge rounded-pill bg-label-primary fs-xsmall me-2">
                        8 New
                      </span>
                      <a
                        href="javascript:void(0)"
                        className="dropdown-notifications-all p-2"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark all as read"
                      >
                        <i className="icon-base ri ri-mail-open-line text-heading" />
                      </a>
                    </div>
                  </div>
                </li>
                <li className="dropdown-notifications-list scrollable-container">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src="/img/avatars/1.png"
                              alt="avatar"
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="grow">
                          <h6 className="small mb-1">
                            Congratulation Lettie 🎉
                          </h6>
                          <small className="mb-1 d-block text-body">
                            Won the monthly best seller gold badge
                          </small>
                          <small className="text-body-secondary">1h ago</small>
                        </div>
                        <div className="shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="icon-base ri ri-close-line" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-danger">
                              CF
                            </span>
                          </div>
                        </div>
                        <div className="grow">
                          <h6 className="small mb-1">Charles Franklin</h6>
                          <small className="mb-1 d-block text-body">
                            Accepted your connection
                          </small>
                          <small className="text-body-secondary">
                            12hr ago
                          </small>
                        </div>
                        <div className="shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="icon-base ri ri-close-line" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src="/img/avatars/2.png"
                              alt="avatar"
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="grow">
                          <h6 className="small mb-1">New Message ✉️</h6>
                          <small className="mb-1 d-block text-body">
                            You have new message from Natalie
                          </small>
                          <small className="text-body-secondary">1h ago</small>
                        </div>
                        <div className="shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="icon-base ri ri-close-line" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-success">
                              <i className="icon-base ri ri-shopping-cart-2-line icon-18px" />
                            </span>
                          </div>
                        </div>
                        <div className="grow">
                          <h6 className="small mb-1">
                            Whoo! You have new order 🛒
                          </h6>
                          <small className="mb-1 d-block text-body">
                            ACME Inc. made new order $1,154
                          </small>
                          <small className="text-body-secondary">
                            1 day ago
                          </small>
                        </div>
                        <div className="shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="icon-base ri ri-close-line" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src="/img/avatars/9.png"
                              alt="avatar"
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="grow">
                          <h6 className="small mb-1">
                            Application has been approved 🚀
                          </h6>
                          <small className="mb-1 d-block text-body">
                            Your ABC project application has been approved.
                          </small>
                          <small className="text-body-secondary">
                            2 days ago
                          </small>
                        </div>
                        <div className="shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="icon-base ri ri-close-line" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-success">
                              <i className="icon-base ri ri-pie-chart-2-line icon-18px" />
                            </span>
                          </div>
                        </div>
                        <div className="grow">
                          <h6 className="small mb-1">
                            Monthly report is generated
                          </h6>
                          <small className="mb-1 d-block text-body">
                            July monthly financial report is generated{" "}
                          </small>
                          <small className="text-body-secondary">
                            3 days ago
                          </small>
                        </div>
                        <div className="shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="icon-base ri ri-close-line" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src="/img/avatars/5.png"
                              alt="avatar"
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="grow">
                          <h6 className="small mb-1">
                            Send connection request
                          </h6>
                          <small className="mb-1 d-block text-body">
                            Peter sent you connection request
                          </small>
                          <small className="text-body-secondary">
                            4 days ago
                          </small>
                        </div>
                        <div className="shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="icon-base ri ri-close-line" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src="/img/avatars/6.png"
                              alt="avatar"
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="grow">
                          <h6 className="small mb-1">New message from Jane</h6>
                          <small className="mb-1 d-block text-body">
                            Your have new message from Jane
                          </small>
                          <small className="text-body-secondary">
                            5 days ago
                          </small>
                        </div>
                        <div className="shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="icon-base ri ri-close-line" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-warning">
                              <i className="icon-base ri ri-error-warning-line icon-18px" />
                            </span>
                          </div>
                        </div>
                        <div className="grow">
                          <h6 className="small mb-1">CPU is running high</h6>
                          <small className="mb-1 d-block text-body">
                            CPU Utilization Percent is currently at 88.63%,
                          </small>
                          <small className="text-body-secondary">
                            5 days ago
                          </small>
                        </div>
                        <div className="shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read"
                          >
                            <span className="badge badge-dot" />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive"
                          >
                            <span className="icon-base ri ri-close-line" />
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="border-top">
                  <div className="d-grid p-4">
                    <a
                      className="btn btn-primary btn-sm d-flex"
                      href="javascript:void(0);"
                    >
                      <small className="align-middle">
                        View all notifications
                      </small>
                    </a>
                  </div>
                </li>
              </ul>
            </li>
            {/*/ Notification */}
            {/* User */}
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a
                className="nav-link dropdown-toggle hide-arrow"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
              >
                <div className="avatar avatar-online">
                  <img
                    src="/img/avatars/1.png"
                    alt="avatar"
                    className="rounded-circle"
                  />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end mt-3 py-2">
                <li>
                  <a
                    className="dropdown-item"
                    href="pages-account-settings-account.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="shrink-0 me-2">
                        <div className="avatar avatar-online">
                          <img
                            src="/img/avatars/1.png"
                            alt="alt"
                            className="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="grow">
                        <h6 className="mb-0 small">John Doe</h6>
                        <small className="text-body-secondary">Admin</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="pages-profile-user.html">
                    <i className="icon-base ri ri-user-3-line icon-22px me-3" />
                    <span className="align-middle">My Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="pages-account-settings-account.html"
                  >
                    <i className="icon-base ri ri-settings-4-line icon-22px me-3" />
                    <span className="align-middle">Settings</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="pages-account-settings-billing.html"
                  >
                    <span className="d-flex align-items-center align-middle">
                      <i className="shrink-0 icon-base ri ri-file-text-line icon-22px me-3" />
                      <span className="grow align-middle">
                        Billing Plan
                      </span>
                      <span className="shrink-0 badge badge-center rounded-pill bg-danger">
                        4
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="pages-pricing.html">
                    <i className="icon-base ri ri-money-dollar-circle-line icon-22px me-3" />
                    <span className="align-middle">Pricing</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages-faq.html">
                    <i className="icon-base ri ri-question-line icon-22px me-3" />
                    <span className="align-middle">FAQ</span>
                  </a>
                </li>
                <li>
                  <div className="d-grid px-4 pt-2 pb-1">
                    <a
                      className="btn btn-sm btn-danger d-flex"
                      href="auth-login-cover.html"
                      target="_blank"
                    >
                      <small className="align-middle">Logout</small>
                      <i className="icon-base ri ri-logout-box-r-line ms-2 icon-16px" />
                    </a>
                  </div>
                </li>
              </ul>
            </li>
            {/*/ User */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
