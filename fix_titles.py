import re
import random

with open('src/data/projectsData.js', 'r') as f:
    lines = f.readlines()

restaurant_descriptors = [
    "Main Dining Area", "Premium Bar Counter", "Lounge Seating", "Private Dining Room", 
    "Outdoor Courtyard", "Grand Entrance Foyer", "Bespoke Lighting Details", "Ceiling Architecture", 
    "Artistic Wall Elements", "Premium VIP Seating", "Custom Furniture Design", "Evening Ambience", 
    "Intricate Interior Details", "Exterior Facade", "Terrace Overview", "Open Patio", 
    "Show Kitchen Concept", "Luxury Washroom Design", "Walkway Corridor", "Wine Display", 
    "Exclusive VIP Area", "Reception Desk", "Welcome Lobby", "Central Atrium", "Banquette Seating",
    "Flooring Details", "Material Palette", "Cozy Corner", "Ambient Lighting", "Bar Display"
]

residence_descriptors = [
    "Master Bedroom", "Living Area", "Guest Bedroom", "Dining Space", "Modular Kitchen",
    "Luxury Bathroom", "Balcony View", "Terrace Garden", "Entrance Foyer", "Lounge Area",
    "Walk-in Closet", "Home Theatre", "Study Room", "Staircase Design", "Exterior Facade",
    "Courtyard", "Pool Area", "Kids Bedroom", "Powder Room", "Corridor"
]

hospital_descriptors = [
    "Main Reception", "Waiting Lounge", "Patient Ward", "VIP Suite", "Consultation Room",
    "Corridor", "Cafeteria", "Exterior View", "Emergency Entrance", "Operation Theatre Prep",
    "Nursing Station", "Pharmacy", "Laboratory", "Diagnostic Center", "Rehab Center",
    "Staff Lounge", "Atrium", "Pediatric Ward", "Maternity Suite", "ICU Setup"
]

commercial_descriptors = [
    "Showroom Floor", "Display Area", "Reception", "Meeting Room", "Executive Cabin",
    "Open Workspace", "Breakout Zone", "Cafeteria", "Conference Room", "Lobby",
    "Facade", "Product Display", "Manager Cabin", "Discussion Pod", "Server Room",
    "Waiting Area", "Pantry", "Terrace", "Restroom", "Entrance"
]

def get_desc(category, index):
    if category == 'restaurants':
        return restaurant_descriptors[index % len(restaurant_descriptors)]
    elif category == 'residential':
        return residence_descriptors[index % len(residence_descriptors)]
    elif category == 'hospital':
        return hospital_descriptors[index % len(hospital_descriptors)]
    else:
        return commercial_descriptors[index % len(commercial_descriptors)]

out_lines = []
counts = {}

for line in lines:
    # Match title: "Project Name - View 01" or title: 'Project Name - View 01'
    match = re.search(r'title:\s*(["\'])([^"\']+?)\s*-\s*[Vv]iew\s*\d+\1', line)
    if match:
        full_title = match.group(2)
        # Try to extract category from the line to pick the right descriptor
        cat_match = re.search(r'category:\s*(["\'])([^"\']+?)\1', line)
        category = cat_match.group(2) if cat_match else 'commercial'
        
        # Keep track of count per project prefix to give distinct names
        prefix = full_title.strip()
        if prefix not in counts:
            counts[prefix] = 0
            
        desc = get_desc(category, counts[prefix])
        counts[prefix] += 1
        
        new_title = f"{prefix} | {desc}"
        line = line.replace(match.group(0), f'title: "{new_title}"')
        
    out_lines.append(line)

with open('src/data/projectsData.js', 'w') as f:
    f.writelines(out_lines)

print("Fixed titles in projectsData.js")
