function STTGMA(age, gcs_total, ais_head_neck,ais_chest,cci_index,amb_status,covid_value,asa){
    var sttgma_power = -1 * (-15.76 + 0.026 * age + 0.207 * gcs_total + 0.354 * ais_head_neck + 0.441 * ais_chest + 0.165 * cci_index + 0.335 * amb_status + 2.727 * covid_value + 1.65 * asa);
	console.log("power: " + sttgma_power);
	var sttgma_e_val = Math.exp(sttgma_power);
	console.log("e_val" + sttgma_e_val);
	sttgma = 1/(1+ sttgma_e_val);

	var rounded_sttgma = sttgma.toFixed(5);
    return rounded_sttgma
}