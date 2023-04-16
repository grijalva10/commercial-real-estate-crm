frappe.provide('commercial_real_estate.custom_sidebar');

// commercial_real_estate.custom_sidebar.render_sidebar_items = function(items) {
//     console.log(items);
//     const createGroup = (icon, label, color, is_collapsible) => {
        
// 	let sidebar_section = $(`<div class="standard-sidebar-section nested-container" data-title="${label}"></div>`);
// 	let $title = $(`<div class="standard-sidebar-label">
// 			<span>${frappe.utils.icon("small-down", "xs")}</span>
// 			<span class="section-title">${label}<span>
// 		</div>`).appendTo(sidebar_section);
		
//     // const $group = $(`
//     //         <div class="nav-item nav-expand standard-sidebar-section nested-container">
//     //             <div class="nav-item-title d-flex align-items-center standard-sidebar-label" style="color: ${color}">
//     //                 <i class="fa ${icon}"></i>
//     //                 <span>${label}</span>
//     //             </div>
//     //             <ul class="nav nav-pills nav-sidebar flex-column" ${is_collapsible ? 'style="display:none;"' : ''}></ul>
//     //         </div>
//     //     `);
//     const $group = sidebar_section;
        
// //         if (is_collapsible) {
// //              const $groupTitle = $group.find('.standard-sidebar-label');
// //              $groupTitle.on("click", (e) => {
// // 			let icon =
// // 				$(e.target).find("span use").attr("href") === "#icon-small-down"
// // 					? "#icon-right"
// // 					: "#icon-small-down";
// // 			$(e.target).find("span use").attr("href", icon);
// // 			$(e.target).parent().find(".sidebar-item-container").toggleClass("hidden");
// // 		});
            
// //         }
        
       

//         // if (is_collapsible) {
//         //     const $groupTitle = $group.find('.nav-item-title');
//         //     $groupTitle.on('click', () => {
//         //         const $subItems = $group.find('.nav-sidebar');
//         //         $subItems.slideToggle(300);
//         //         $group.toggleClass('nav-expanded');
//         //     });
//         // }

//         return $group;
//     };

//     const createItem = (icon, label, color, doctype, view_type) => {
//         return $(`
//             <li class="nav-item">
//                 <a href="/app/List/${doctype}/${view_type}" class="nav-link" style="color: ${color}">
//                     <i class="fa ${icon} nav-icon"></i>
//                     <p>${label}</p>
//                 </a>
//             </li>
//         `);
//     };

//     // let sidebar_items = items;

//     // Organize items in a hierarchical structure
//     // items.forEach(item => {
//     //     if (item.is_group) {
//     //         sidebar_items[item.name] = {
//     //             label: item.label,
//     //             icon: item.icon,
//     //             color: item.color || '#000000',
//     //             is_collapsible: item.is_collapsible,
//     //             children: []
//     //         };
//     //     } else if (item.parent) {
//     //         if (sidebar_items[item.parent]) {
//     //             sidebar_items[item.parent].children.push(item);
//     //         }
//     //     }
//     // });

//     // console.log(sidebar_items);
//     $('.sidebar-menu').prepend('<div class="cre-sidebar"></div>')
//     const $sidebarMenu = $('.cre-sidebar');
//     $sidebarMenu.addClass('nav-legacy');

//     let sidebar_items = {};

//     // Organize items in a hierarchical structure
//     items.forEach(item => {
//         if (item.is_group) {
//             sidebar_items[item.name] = {
//                 label: item.label,
//                 icon: item.icon,
//                 color: item.color || '#000000',
//                 is_collapsible: item.is_collapsible,
//                 children: []
//             };
//         }
//         else if (item.parent) {
//             if (sidebar_items[item.parent]) {
//                 sidebar_items[item.parent].children.push(item);
//             }
//         }
//     });


//     // Create DOM elements for sidebar items
//     Object.keys(sidebar_items).forEach(key => {
//         let group = sidebar_items[key];
//         let $group = createGroup(group.icon, group.label, group.color, group.is_collapsible);

//         group.children.forEach(child => {
//             let $item = createItem(child.icon, child.label, group.color, child.doctype_name, child.view_type);
//             $group.children('.nav-sidebar').append($item);
//         });

//         $sidebarMenu.append($group);
//     });


// };

commercial_real_estate.custom_sidebar.render_sidebar_items = function(items) {
    console.log(items);

    const createGroup = (icon, label, color, is_collapsible) => {
        let sidebar_section = $(`<div class="standard-sidebar-section nested-container" data-title="${label}"></div>`);
        let $title = $(`<div class="standard-sidebar-label">
            <span>${frappe.utils.icon("small-down", "xs")}</span>
            <span class="section-title">${label}<span>
        </div>`).appendTo(sidebar_section);

        const $group = sidebar_section;

        if (is_collapsible) {
            $title.on("click", (e) => {
                let icon =
                    $(e.target).find("span use").attr("href") === "#icon-small-down"
                        ? "#icon-right"
                        : "#icon-small-down";
                $(e.target).find("span use").attr("href", icon);
                $group.find(".standard-sidebar-section").slideToggle(300);
            });
        }

        return $group;
    };

    const createItem = (icon, label, color, doctype, view_type) => {

        
        // return $(`
        //     <li class="nav-item">
        //         <a href="/app/List/${doctype}/${view_type}" class="nav-link" style="color: ${color}">
        //             <i class="fa ${icon} nav-icon"></i>
        //             <p>${label}</p>
        //         </a>
        //     </li>
        // `);
         return $(`<div class="sidebar-item-container" item-parent="" item-name="${label}">
				<div class="standard-sidebar-item">
					<a href="/app/List/${doctype}/${view_type}" class="item-anchor" title="${label}">
						<span class="sidebar-item-icon" item-icon="${icon}"><svg class="icon  icon-md" style="">
						<use class="" href="#icon-${icon}"></use></svg></span>
						<span class="sidebar-item-label">${label}<span>
					    </span></span>
					</a>
				</div>
				<div class="sidebar-child-item nested-container"></div>
			</div>`);
    };

    $('.sidebar-menu').prepend('<div class="cre-sidebar"></div>');
    const $sidebarMenu = $('.cre-sidebar');
    $sidebarMenu.addClass('nav-legacy');

    let sidebar_items = {};

    // Organize items in a hierarchical structure
    items.forEach(item => {
        if (item.is_group) {
            sidebar_items[item.name] = {
                label: item.label,
                icon: item.icon,
                color: item.color || '#000000',
                is_collapsible: item.is_collapsible,
                children: []
            };
        } else if (item.parent) {
            if (sidebar_items[item.parent]) {
                sidebar_items[item.parent].children.push(item);
            }
        }
    });

    // Create DOM elements for sidebar items
    Object.keys(sidebar_items).forEach(key => {
        let group = sidebar_items[key];
        let $group = createGroup(group.icon, group.label, group.color, group.is_collapsible);
         console.log($group);

        group.children.forEach(child => {
            let $item = createItem(child.icon, child.label, group.color, child.doctype_name, child.view_type);
            console.log($item);
            console.log($group.children('.standard-sidebar-section'));
            $group.children('.standard-sidebar-section').append($item);
        });

        $sidebarMenu.append($group);
    });

};


commercial_real_estate.custom_sidebar.refresh_custom_sidebar = function() {
    frappe.call({
        method: 'commercial_real_estate.custom_sidebar.render_custom_sidebar',
        callback: function(r) {
            if (r.message) {
                let sidebar_items = [];

                r.message.forEach(item => {
                    sidebar_items.push({
                        name: item.name,
                        label: item.label,
                        icon: item.icon,
                        color: item.color || '#000000',
                        is_collapsible: item.is_collapsible,
                        is_group: item.is_group,
                        parent: item.parent1,
                        doctype_name: item.doctype_name,
                        view_type: item.view_type
                    });
                });

                commercial_real_estate.custom_sidebar.render_sidebar_items(sidebar_items);
            }
        }
    });
};


$(document).on('app_ready', function() {
    commercial_real_estate.custom_sidebar.refresh_custom_sidebar();

});

frappe.realtime.on("system_settings_update", function() {
    commercial_real_estate.custom_sidebar.refresh_custom_sidebar();

});
