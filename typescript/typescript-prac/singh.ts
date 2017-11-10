// roStyleFTFStatus(rowData: FundTransferFileStatus){
// 	//return rowData.status = 'Failed' ? 'FTS-row-failed' : '';
// 	var dateModifiedTime;
// 	if(rowData.dateModified){
// 		dateModifiedTime = (rowData.dateModified.toString().slice(11,rowData.dateModified.length)).slice(0,2);
// 	}

// 	if((rowData.status === 'Failed') || 
// 		(rowData.status === 'Failed' && (parseInt(dateModifiedTime) > parseInt(rowData.sla.slice(0,2)))) || 
// 		(rowData.status === 'Created' && (parseInt(dateModifiedTime) > parseInt(rowData.sla.slice(0,2)))) ||
// 		(rowData.status === 'Confirm' && (parseInt(dateModifiedTime) > parseInt(rowData.sla.slice(0,2))))
// 		){
// 		return 'FTS-row-failed';
// 	}
// }

roStyleFTFStatus(rowData: FundTransferFileStatus){
	if(rowData.status === 'Failed'){
		if(rowData.dateModified && rowData.sla){
			return checkGreater(rowData.dateModified, rowData.sla);
 		}else {
 			return 'FTS-row-failed';
 		}
	}else if(rowData.status === 'Created'){
		if(rowData.dateModified && rowData.sla){
			return checkGreater(rowData.dateModified, rowData.sla);
 		}else {
 			return 'FTS-row-failed';
 		}		
	}else if(rowData.status === 'Confirm'){
		if(rowData.dateModified && rowData.sla){
			return checkGreater(rowData.dateModified, rowData.sla);
 		}else {
 			return 'FTS-row-failed';
 		}		
	}else{
		return '';
	}
}

checkGreater(dateModified, sla){
	var newDateModifiedTime = (rowData.dateModified.toString().slice(11,rowData.dateModified.length)).slice(0,2);
	if(parseInt(newDateModifiedTime) > parseInt(rowData.sla.slice(0,2)))){
		return 'FTS-row-failed';
	}else{
		return '';
	}
}