import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

import { IconButton } from '@radix-ui/themes';
import { Share1Icon } from '@radix-ui/react-icons';

interface Props<T> {
    data: T[];
    fileName: string;
}

const ExcelExport: React.FC<Props<any>> = ({ data, fileName }) => {
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});

        saveAs(blob, `${fileName}.xlsx`);
    };

    return (
        <IconButton variant='soft' color='orange' onClick={exportToExcel}>
            <Share1Icon />
        </IconButton>
    );
};

export default ExcelExport;