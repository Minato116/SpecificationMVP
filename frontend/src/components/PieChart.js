import * as React from 'react';
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';
import "../Screens/index.css"

export default function PieAnimation(props) {
    const colors = [
        '#FF6B6B', '#4D96FF', '#FFC75F', '#6A4C93', '#30C5FF', 
        '#FF8C42', '#42E695', '#9B5DE5', '#E84855', '#FF6F61',
        '#845EC2', '#D65DB1', '#FF9671', '#FFC75F', '#F9F871',
        '#2C699A', '#00A676', '#F28585', '#B56576', '#6A0572'
    ];

    // Ensure categoryResults is not null/undefined
    const categoryResults = props.categoryResults || {};

    // Check if categoryResults is empty
    if (Object.keys(categoryResults).length === 0) {
        return <div>No data available</div>;
    }

    // Prepare data for Pie chart
    const pieChartData = Object.keys(categoryResults).map((category, index) => ({
        label: category,
        value: Math.floor((Number(categoryResults[category]) / Object.keys(categoryResults).length) * 100),
        color: colors[index % colors.length],
    }));

    // Prepare legend data
    const legendData = Object.keys(categoryResults).map((category, index) => ({
        label: category,
        color: colors[index % colors.length],
    }));

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <PieChart
                height={300}
                series={[
                    {
                        data: pieChartData.slice(0, props.itemNumber),
                        innerRadius: 40,
                        outerRadius: 150,
                        cornerRadius: 5,
                        arcLabel: (params) => `${params.value + " %"}`,
                        arcLabelMinAngle: 10,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { additionalRadius: 0 },
                    },
                ]}
                slotProps={{ legend: { hidden: true } }}
                skipAnimation={true}
            />
           <div className='no-print'>
             {/* Color Legend in Two Columns */}
             <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px', width: '100%', maxWidth: 600 }}>
                {/* First Column */}
                <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
                    {legendData.slice(0, Math.ceil(legendData.length / 2)).map((item, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
                            <Box
                                sx={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: item.color,
                                    marginRight: '10px',
                                    borderRadius: '50%',
                                }}
                            />
                            <span>{item.label}</span>
                        </Box>
                    ))}
                </Box>

                {/* Second Column */}
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {legendData.slice(Math.ceil(legendData.length / 2)).map((item, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
                            <Box
                                sx={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: item.color,
                                    marginRight: '10px',
                                    borderRadius: '50%',
                                }}
                            />
                            <span>{item.label}</span>
                        </Box>
                    ))}
                </Box>
            </Box>
           </div> 
           
        </Box>
    );
}
