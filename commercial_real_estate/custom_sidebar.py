# custom_sidebar.py

import frappe

@frappe.whitelist()
def get_sidebar_items():
    sidebar_items = [
        {
            "label": "Modules",
            "items": [
                {
                    "type": "doctype",
                    "name": "Contact",
                    "label": "Contacts",
                },
                {
                    "type": "doctype",
                    "name": "Company",
                    "label": "Companies",
                },
                {
                    "type": "doctype",
                    "name": "Property",
                    "label": "Properties",
                },
                {
                    "type": "doctype",
                    "name": "Listing",
                    "label": "Listings",
                },
                {
                    "type": "doctype",
                    "name": "Deal",
                    "label": "Deals",
                },
                {
                    "type": "doctype",
                    "name": "Activity",
                    "label": "Activities",
                },
                {
                    "type": "link",
                    "label": "Calendar",
                    "route": "/desk#calendar",
                },
                {
                    "type": "link",
                    "label": "Reports",
                    "route": "/desk#query-report",
                },
            ],
        },
        
        {
            "label": "Marketing",
            "items": [
        {
            "type": "doctype",
            "name": "Email Campaign",
            "label": "Email Campaigns",
        },
        {
            "type": "doctype",
            "name": "Brochure",
            "label": "Brochures",
        },
    ],
},

        
        
    ]
    return sidebar_items
    

# custom_sidebar.py

@frappe.whitelist()
def get_custom_sidebar_items():
    items = frappe.get_all("CustomSidebarItem",
        fields=["*"],
        order_by="sequence")
    print(items)
    return items

@frappe.whitelist()
def render_custom_sidebar():
    items = get_custom_sidebar_items()
    print(items)
    return items
