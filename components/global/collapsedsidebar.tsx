import { Accordion } from "react-bootstrap";
import { ItemProps } from "../../utils/store";
import CollapsedAccordToggle from "./sidebar_components/collapsded_components/collapsed_accord_toggle";
import CollpasedButtonLink from "./sidebar_components/collapsded_components/collapsed_button_link";
import MainSidebar from "./sidebar_components/mainsidebar";
import SidebarSection, { CollapseSidebarSection } from "./sidebar_components/sidebar_section";

const AccessControl: ItemProps[] = [
    {
        itemName: "Policies",
        itemPath: "/admin_center/access_control/policies",
    },
    {
        itemName: "Roles",
        itemPath: "/admin_center/access_control/roles",
    },
    {
        itemName: "Users",
        itemPath: "/admin_center/access_control/users",
    },
];
const SubscriptionRoutes: ItemProps[] = [
    {
        itemName: "Current Subscription",
        itemPath: "/admin_center/licensing/subscription",
    },
    {
        itemName: "New Subscription",
        itemPath: "/admin_center/licensing/subscription/new_subscription",
    },
];
const BillingRoutes: ItemProps[] = [
    {
        itemName: "Billing Accounts",
        itemPath: "/admin_center/licensing/billing",
    },
    {
        itemName: "New Billing Accounts",
        itemPath: "/admin_center/licensing/billing/new_billing_account",
    },
];
const PaymentRoutes: ItemProps[] = [
    {
        itemName: "Payment Method",
        itemPath: "/admin_center/licensing/invoicing",
    },
    {
        itemName: "New Payment Method",
        itemPath: "/admin_center/licensing/invoicing/new_payment_method",
    },
];
const ConnectivityRoutes: ItemProps[] = [
    {
        itemName: "Connections List",
        itemPath: "/workspace/profiler/connectivity/dbconnectionlist",
    },
    {
        itemName: "New DB Connections",
        itemPath: "/workspace/profiler/connectivity/dbconnection",
    },
];
const ExploreRoutes: ItemProps[] = [
    {
        itemName: "Overview",
        itemPath: "/workspace/datasets_explorer/",
    },
    {
        itemName: "Datasets",
        itemPath: "/workspace/datasets_explorer/datasets/",
    },
    {
        itemName: "Metrics",
        itemPath: "/workspace/datasets_explorer/metrics/",
    },
    {
        itemName: "Execution Logs",
        itemPath: "/workspace/datasets_explorer/exec_logs/",
    },
];
const AttributeRoutes: ItemProps[] = [
    {
        itemName: "Overview",
        itemPath: "/workspace/attributes/",
    },
    {
        itemName: "Create Attribute",
        itemPath: "/workspace/attributes/create_attribute",
    }
];
const DomainRoutes: ItemProps[] = [
    {
        itemName: "Overview",
        itemPath: "/workspace/domain/",
    },
    {
        itemName: "Create Domain",
        itemPath: "/workspace/domain/create_domain",
    }
];
const BusRuleRoutes: ItemProps[] = [
    {
        itemName: "Overview",
        itemPath: "/workspace/business_rules/",
    },
    {
        itemName: "Create Business Rule",
        itemPath: "/workspace/business_rules/create_business_rule",
    }
];

export default function CollapsedSidebar() {
    return (
        <MainSidebar logoOnly>
            <Accordion>
                <CollapseSidebarSection sectionName="Home">
                    <CollpasedButtonLink
                        path={"/admin_center/dashboard/"}
                        icon={
                            <svg width="24" height="25" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00038 10.75C5.62282 10.75 3.50847 11.898 2.16237 13.6795C1.87265 14.0629 1.7278 14.2546 1.73253 14.5137C1.7362 14.7139 1.8619 14.9664 2.0194 15.09C2.22327 15.25 2.50578 15.25 3.0708 15.25H12.93C13.495 15.25 13.7775 15.25 13.9814 15.09C14.1389 14.9664 14.2646 14.7139 14.2682 14.5137C14.273 14.2546 14.1281 14.0629 13.8384 13.6795C12.4923 11.898 10.3779 10.75 8.00038 10.75Z" stroke="#79CA9C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.00038 8.5C9.86434 8.5 11.3754 6.98896 11.3754 5.125C11.3754 3.26104 9.86434 1.75 8.00038 1.75C6.13642 1.75 4.62538 3.26104 4.62538 5.125C4.62538 6.98896 6.13642 8.5 8.00038 8.5Z" stroke="#79CA9C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        }
                        activeName={"dashboard"}
                        buttonName="Dashboard"
                    />
                    <CollapsedAccordToggle
                        eventKey={"0"}
                        buttonName="Access Control"
                        icon={
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.4"
                                    d="M10.0833 15.9712H3.50777C2.67555 15.9712 2 16.6349 2 17.4525C2 18.269 2.67555 18.9338 3.50777 18.9338H10.0833C10.9155 18.9338 11.5911 18.269 11.5911 17.4525C11.5911 16.6349 10.9155 15.9712 10.0833 15.9712Z"
                                />
                                <path
                                    opacity="0.4"
                                    d="M22 6.39186C22 5.57533 21.3244 4.91162 20.4933 4.91162H13.9178C13.0856 4.91162 12.41 5.57533 12.41 6.39186C12.41 7.20948 13.0856 7.87318 13.9178 7.87318H20.4933C21.3244 7.87318 22 7.20948 22 6.39186Z"
                                />
                                <path d="M8.87774 6.39174C8.87774 8.25841 7.33886 9.7714 5.43887 9.7714C3.53999 9.7714 2 8.25841 2 6.39174C2 4.52617 3.53999 3.01318 5.43887 3.01318C7.33886 3.01318 8.87774 4.52617 8.87774 6.39174Z" />
                                <path d="M22 17.4124C22 19.2779 20.4611 20.7909 18.5611 20.7909C16.6622 20.7909 15.1223 19.2779 15.1223 17.4124C15.1223 15.5457 16.6622 14.0327 18.5611 14.0327C20.4611 14.0327 22 15.5457 22 17.4124Z" />
                            </svg>
                        }
                        routes={AccessControl}
                    />
                    <CollapsedAccordToggle
                        eventKey={"1"}
                        buttonName="Subscription"
                        icon={
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.3"
                                    d="M2.09991 10.0137C2.99991 5.61367 6.69989 2.31367 11.1999 2.01367L8.7999 4.41367L11.0999 7.01367C9.59991 7.31367 8.29991 8.21366 7.59991 9.61366L4.49991 12.4137L2.09991 10.0137ZM19.2999 11.5137L16.3999 14.0137C15.6999 15.5137 14.3999 16.6137 12.6999 16.9137L14.9999 19.5137L12.5999 21.9137C17.0999 21.6137 20.7999 18.2137 21.6999 13.9137L19.2999 11.5137Z"
                                />
                                <path d="M13.8 2.11328C18.2 3.01328 21.5 6.71329 21.8 11.2133L19.4 8.81328L16.8 11.0133C16.5 9.41329 15.5 8.11328 14 7.41328L11.4 4.41328L13.8 2.11328ZM12.3 19.4133L9.69998 16.4133C8.29998 15.7133 7.3 14.4133 7 12.8133L4.39999 15.1133L2 12.7133C2.3 17.2133 5.7 20.9133 10 21.8133L12.3 19.4133Z" />
                            </svg>
                        }
                        routes={SubscriptionRoutes}
                    />
                    <CollapsedAccordToggle
                        eventKey={"2"}
                        buttonName="Billing"
                        icon={
                            <svg
                                width="16"
                                height="21"
                                viewBox="0 0 16 21"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.3"
                                    d="M15 20.0137H1C0.4 20.0137 0 19.6137 0 19.0137V1.01367C0 0.413672 0.4 0.0136719 1 0.0136719H10L16 6.01367V19.0137C16 19.6137 15.6 20.0137 15 20.0137ZM11 15.0137C11 14.4137 10.6 14.0137 10 14.0137H4C3.4 14.0137 3 14.4137 3 15.0137C3 15.6137 3.4 16.0137 4 16.0137H10C10.6 16.0137 11 15.6137 11 15.0137ZM13 10.0137C13 9.41367 12.6 9.01367 12 9.01367H4C3.4 9.01367 3 9.41367 3 10.0137C3 10.6137 3.4 11.0137 4 11.0137H12C12.6 11.0137 13 10.6137 13 10.0137ZM13 5.01367C13 4.41367 12.6 4.01367 12 4.01367H4C3.4 4.01367 3 4.41367 3 5.01367C3 5.61367 3.4 6.01367 4 6.01367H12C12.6 6.01367 13 5.61367 13 5.01367Z"
                                />
                            </svg>
                        }
                        routes={BillingRoutes}
                    />
                    <CollapsedAccordToggle
                        eventKey={"3"}
                        buttonName="Invoicing"
                        icon={
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.3"
                                    d="M21 22.0137H14C13.4 22.0137 13 21.6137 13 21.0137V3.01367C13 2.41367 13.4 2.01367 14 2.01367H21C21.6 2.01367 22 2.41367 22 3.01367V21.0137C22 21.6137 21.6 22.0137 21 22.0137Z"
                                />
                                <path d="M10 22.0137H3C2.4 22.0137 2 21.6137 2 21.0137V3.01367C2 2.41367 2.4 2.01367 3 2.01367H10C10.6 2.01367 11 2.41367 11 3.01367V21.0137C11 21.6137 10.6 22.0137 10 22.0137Z" />
                            </svg>
                        }
                        routes={PaymentRoutes}
                    />
                    <CollapsedAccordToggle
                        eventKey={"4"}
                        buttonName="Connectivity"
                        icon={
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.3"
                                    d="M21 22.0137H14C13.4 22.0137 13 21.6137 13 21.0137V3.01367C13 2.41367 13.4 2.01367 14 2.01367H21C21.6 2.01367 22 2.41367 22 3.01367V21.0137C22 21.6137 21.6 22.0137 21 22.0137Z"
                                />
                                <path d="M10 22.0137H3C2.4 22.0137 2 21.6137 2 21.0137V3.01367C2 2.41367 2.4 2.01367 3 2.01367H10C10.6 2.01367 11 2.41367 11 3.01367V21.0137C11 21.6137 10.6 22.0137 10 22.0137Z" />
                            </svg>
                        }
                        routes={ConnectivityRoutes}
                    />

                    <CollapsedAccordToggle
                        eventKey={"5"}
                        buttonName="Explorer"
                        icon={
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.3"
                                    d="M21 22.0137H14C13.4 22.0137 13 21.6137 13 21.0137V3.01367C13 2.41367 13.4 2.01367 14 2.01367H21C21.6 2.01367 22 2.41367 22 3.01367V21.0137C22 21.6137 21.6 22.0137 21 22.0137Z"
                                />
                                <path d="M10 22.0137H3C2.4 22.0137 2 21.6137 2 21.0137V3.01367C2 2.41367 2.4 2.01367 3 2.01367H10C10.6 2.01367 11 2.41367 11 3.01367V21.0137C11 21.6137 10.6 22.0137 10 22.0137Z" />
                            </svg>
                        }
                        routes={ExploreRoutes}
                    />
                    <CollapsedAccordToggle
                        eventKey={"6"}
                        buttonName="Domain"
                        icon={
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.3"
                                    d="M21 22.0137H14C13.4 22.0137 13 21.6137 13 21.0137V3.01367C13 2.41367 13.4 2.01367 14 2.01367H21C21.6 2.01367 22 2.41367 22 3.01367V21.0137C22 21.6137 21.6 22.0137 21 22.0137Z"
                                />
                                <path d="M10 22.0137H3C2.4 22.0137 2 21.6137 2 21.0137V3.01367C2 2.41367 2.4 2.01367 3 2.01367H10C10.6 2.01367 11 2.41367 11 3.01367V21.0137C11 21.6137 10.6 22.0137 10 22.0137Z" />
                            </svg>
                        }
                        routes={DomainRoutes}
                    />
                </CollapseSidebarSection>
            </Accordion>
        </MainSidebar>
    )
}