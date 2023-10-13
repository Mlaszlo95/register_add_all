// ==UserScript==
// @name         Register rightnumber next to menu text
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Felszámozza a pontok hozzáférési számát
// @author       Megyeri László
// @match        https://10.2.20.23/dpdregister/*
// @match        https://register.dpd.hu/dpdregister/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.3.js
// @require
// ==/UserScript==
/* global $ */

(function() {
    'use strict';
    main()
    console.log("Register jogok a lista mögött, működik!")
    // Your code here...
})();

function main(){
    //ide kerül be az SQL query tartalma, " - jel nélkül, /r/n lecseréljük ; - re

    var urlWithAccesslevel = "addr_modify_entry.php,31;addr_modify_list.php,31;anonymization_form.php,127;archiv/search.php,105;archiv/verify.php,105;bericht_kereses_hu.php,99;claim_new2.php,105;clearing_query.php,67;cod_csomaglista_new.php,19;cod_hianyzo_ugyfelek.php,20;cod_kezi_modositas.php,20;cod_money_utal_hu.php,20;cod_money_utal_modosit_hu.php,20;cod_pl_ml_search.php,105;cod_return_to_sender_hu.php,24;cod_self_bk_list_keres.php,99;cod_storno.php,21;cod_utal_keres.php,19;cr_id_ml_search.php,65;deployment_dashboard,65;depot_date_ranges.php,81;depot_global.php,81;depot_tours.php,82;/dispatcher/core,40;dnote_list_print.php,83;dnote_new2.php,88;dnote_search_missing.php,88;dnote_search.php,88;dsw_ugyf_cssz.php,65;egy_felado_csomagjai.php,65;egy_felado_delivery_perf_new.php,65;eseti_felvetel.php,25;export_import_smm_data.php,0;formcreator/,6;form_creator.php?fgroupid=1,81;form_creator.php?fgroupid=102,27;form_creator.php?fgroupid=103,20;form_creator.php?fgroupid=11,57;form_creator.php?fgroupid=115,56;form_creator.php?fgroupid=116,56;form_creator.php?fgroupid=117,56;form_creator.php?fgroupid=119,56;form_creator.php?fgroupid=120,53;form_creator.php?fgroupid=121,56;form_creator.php?fgroupid=122,56;form_creator.php?fgroupid=123,56;form_creator.php?fgroupid=125,56;form_creator.php?fgroupid=127,56;form_creator.php?fgroupid=129,56;form_creator.php?fgroupid=130,53;form_creator.php?fgroupid=133,56;form_creator.php?fgroupid=135,56;form_creator.php?fgroupid=137,56;form_creator.php?fgroupid=138,56;form_creator.php?fgroupid=139,97;form_creator.php?fgroupid=140,81;form_creator.php?fgroupid=152HU,83;form_creator.php?fgroupid=178,38;form_creator.php?fgroupid=179HU,38;form_creator.php?fgroupid=180HU,97;form_creator.php?fgroupid=180HU_v2,97;form_creator.php?fgroupid=188,40;form_creator.php?fgroupid=189HU,97;form_creator.php?fgroupid=19,13;form_creator.php?fgroupid=190HU,97;form_creator.php?fgroupid=191HU,97;form_creator.php?fgroupid=194,79;form_creator.php?fgroupid=197,40;form_creator.php?fgroupid=198,40;form_creator.php?fgroupid=1HPDEP,40;form_creator.php?fgroupid=1HPKPIA1,40;form_creator.php?fgroupid=1HPKPIR2,40;form_creator.php?fgroupid=1HPKPIR4,40;form_creator.php?fgroupid=2,33;form_creator.php?fgroupid=20,105;form_creator.php?fgroupid=21,81;form_creator.php?fgroupid=22,105;form_creator.php?fgroupid=27HU,46;form_creator.php?fgroupid=28HU,46;form_creator.php?fgroupid=29HU,20;form_creator.php?fgroupid=3,81;form_creator.php?fgroupid=34,81;form_creator.php?fgroupid=36HU,101;form_creator.php?fgroupid=37HU,72;form_creator.php?fgroupid=39,81;form_creator.php?fgroupid=4,81;form_creator.php?fgroupid=40,77;form_creator.php?fgroupid=41,81;form_creator.php?fgroupid=42,81;form_creator.php?fgroupid=43,81;form_creator.php?fgroupid=44,81;form_creator.php?fgroupid=44HU,89;form_creator.php?fgroupid=45,81;form_creator.php?fgroupid=46,81;form_creator.php?fgroupid=47,81;form_creator.php?fgroupid=48,79;form_creator.php?fgroupid=5,77;form_creator.php?fgroupid=50,81;form_creator.php?fgroupid=51,79;form_creator.php?fgroupid=52,79;form_creator.php?fgroupid=56,79;form_creator.php?fgroupid=58,81;form_creator.php?fgroupid=59,79;form_creator.php?fgroupid=6,81;form_creator.php?fgroupid=61,81;form_creator.php?fgroupid=63,81;form_creator.php?fgroupid=65,81;form_creator.php?fgroupid=67,82;form_creator.php?fgroupid=67_POSMM,82;form_creator.php?fgroupid=68,82;form_creator.php?fgroupid=70,13;form_creator.php?fgroupid=701290,65;form_creator.php?fgroupid=701291,65;form_creator.php?fgroupid=71,100;form_creator.php?fgroupid=76,81;form_creator.php?fgroupid=77,13;form_creator.php?fgroupid=78,13;form_creator.php?fgroupid=79,13;form_creator.php?fgroupid=790,40;form_creator.php?fgroupid=793,40;form_creator.php?fgroupid=795,65;form_creator.php?fgroupid=799HU,97;form_creator.php?fgroupid=800127,0;form_creator.php?fgroupid=800128,98;form_creator.php?fgroupid=800138_FS,13;form_creator.php?fgroupid=800145_PUDS,63;form_creator.php?fgroupid=800147_PUD_PP,63;form_creator.php?fgroupid=81,13;form_creator.php?fgroupid=82,13;form_creator.php?fgroupid=83,13;form_creator.php?fgroupid=84,13;form_creator.php?fgroupid=85,13;form_creator.php?fgroupid=86,13;form_creator.php?fgroupid=87,13;form_creator.php?fgroupid=9,81;form_creator.php?fgroupid=900527,0;form_creator.php?fgroupid=95,19;form_creator.php?fgroupid=97,6;form_creator.php?fgroupid=account_number_range_check,67;form_creator.php?fgroupid=APRLST,105;form_creator.php?fgroupid=APRSET,40;form_creator.php?fgroupid=bad_debts_case_invoices,97;form_creator.php?fgroupid=bad_debts_cases,97;form_creator.php?fgroupid=claimshu,40;form_creator.php?fgroupid=cod_exc_rates,0;form_creator.php?fgroupid=CONFIRM_PHOTO,40;form_creator.php?fgroupid=CR_IMP_SET,0;form_creator.php?fgroupid=CR_MFILES,40;form_creator.php?fgroupid=CTP_GROUP,81;form_creator.php?fgroupid=CUSTPROP,63;form_creator.php?fgroupid=D24TRCK,99;form_creator.php?fgroupid=DADC1043,13;form_creator.php?fgroupid=DAM_1460,40;form_creator.php?fgroupid=DAM_1468,40;form_creator.php?fgroupid=DAM_1471,40;form_creator.php?fgroupid=dam_address_book_upload,40;form_creator.php?fgroupid=DAM_address_management_list,40;form_creator.php?fgroupid=dam_kx_export,40;form_creator.php?fgroupid=DELIST,40;form_creator.php?fgroupid=DGAC,40;form_creator.php?fgroupid=DISPTR1,40;form_creator.php?fgroupid=DNOTIFS,40;form_creator.php?fgroupid=dsw_prod_class_6789,13;form_creator.php?fgroupid=EMAGRETMAIL,105;form_creator.php?fgroupid=EMAGRETMAIL2,105;form_creator.php?fgroupid=EMB_ERRORLIST,65;form_creator.php?fgroupid=EMB_MAIL_SET,40;form_creator.php?fgroupid=EMB_MANUAL,40;form_creator.php?fgroupid=emergency_sms,93;form_creator.php?fgroupid=formcreator_user_settings,33;form_creator.php?fgroupid=GTR185,49;form_creator.php?fgroupid=GTR188,49;form_creator.php?fgroupid=HUDS,38;form_creator.php?fgroupid=IDM1178&menu,51;form_creator.php?fgroupid=IDM_V2_1351,51;form_creator.php?fgroupid=IDM_V2_1355,51;form_creator.php?fgroupid=IDM_V2_1365,52;form_creator.php?fgroupid=IDM_V2_1398,51;form_creator.php?fgroupid=IDM_V2_800145,51;form_creator.php?fgroupid=IDM_V2_800146,51;form_creator.php?fgroupid=IDM_V2_BS_1370,51;form_creator.php?fgroupid=IDM_V2_GS_1321,51;form_creator.php?fgroupid=IDM_V3_002,51;form_creator.php?fgroupid=IDM_V3_003,51;form_creator.php?fgroupid=IDM_V3_CT,51;form_creator.php?fgroupid=import_pricing,82;form_creator.php?fgroupid=it4em_feladasra_varo_szamlak,67;form_creator.php?fgroupid=KA1,65;form_creator.php?fgroupid=KR800143,105;form_creator.php?fgroupid=manage_exp_addr,40;form_creator.php?fgroupid=MMPSSEARCH,33;form_creator.php?fgroupid=modify_product_element,77;form_creator.php?fgroupid=MSOUND,40;form_creator.php?fgroupid=NEXTDEPO,124;form_creator.php?fgroupid=pp_cg_list,63;form_creator.php?fgroupid=pp_sps_list,63;form_creator.php?fgroupid=pp_ws_list,63;form_creator.php?fgroupid=price_comp,81;form_creator.php?fgroupid=PUDO-794,63;form_creator.php?fgroupid=PUDO-800,63;form_creator.php?fgroupid=PUDO_PARCELS_STATUS,63;form_creator.php?fgroupid=REGADDRS1,40;form_creator.php?fgroupid=register-settings,6;form_creator.php?fgroupid=ROD109,88;form_creator.php?fgroupid=ROD110HU,88;form_creator.php?fgroupid=sales_answer01,95;form_creator.php?fgroupid=scan_settings,40;form_creator.php?fgroupid=score_set,40;form_creator.php?fgroupid=SCPD1049,12;form_creator.php?fgroupid=self_bk_customerno_fix,19;form_creator.php?fgroupid=SMM_AC,77;form_creator.php?fgroupid=SUBCONTR_EXP,40;form_creator.php?fgroupid=SUBST1,40;form_creator.php?fgroupid=TRA,40;form_creator.php?fgroupid=VATS1,105;form_creator.php?fgroupid=WH518,94;form_creator.php?formid=10,81;form_creator.php?formid=1017_MCL,84;form_creator.php?formid=112_v6&type=Normal&function=integrated,91;form_creator.php?formid=112_v6&type=Pudo&function=integrated,91;form_creator.php?formid=1272_PC,63;form_creator.php?formid=1349,65;form_creator.php?formid=178_POSMM,77;form_creator.php?formid=208,82;form_creator.php?formid=209,82;form_creator.php?formid=209_POSMM,79;form_creator.php?formid=216,81;form_creator.php?formid=217,81;form_creator.php?formid=258,13;form_creator.php?formid=272,13;form_creator.php?formid=281,12;form_creator.php?formid=282,12;form_creator.php?formid=283,12;form_creator.php?formid=296HU,83;form_creator.php?formid=297HU,83;form_creator.php?formid=298HU,65;form_creator.php?formid=414,56;form_creator.php?formid=420,56;form_creator.php?formid=428,56;form_creator.php?formid=471HU,12;form_creator.php?formid=486,77;form_creator.php?formid=50,12;form_creator.php?formid=520,0;form_creator.php?formid=553,105;form_creator.php?formid=609,81;form_creator.php?formid=710,40;form_creator.php?formid=718,40;form_creator.php?formid=72,70;form_creator.php?formid=74,73;form_creator.php?formid=931,40;form_creator.php?formid=94,65;form_creator.php?formid=DISPMT1&default=on&action=modify&actid=1,40;form_creator.php?formid=DISPT,40;form_creator.php?formid=DISPT_OLD,0;form_creator.php?formid=FFCS_HU,105;form_creator.php?formid=GENCCDS,12;form_creator.php?formid=GTR459,49;form_creator.php?formid=GTR598,49;form_creator.php?formid=PUDOR1,12288;form_creator.php?formid=PUDOR2,12288;form_creator.php?formid=ROD343HU,44;form_creator.php?formid=SKSMM454_v2,79;form_creator.php?formid=smm_import_fee_data,82;form_creator.php?formid=vatera_query_weight,65;form_creator.php?formid=WC521,94;futar_visszaru_thermo.php,105;gante_lekerd.php,105;gante_rogz.php,105;gondrand_tarifalas.php,86;handle_hi_insurances.php,47;hi_add.php,47;hi_list.php,47;hi_send_dsw.php,47;hu_inbound_merleg_d1640.php,65;hu_inbound_merleg.php,65;idm2/notifications,52;idm2/phonerules,52;idm2/postalcodes,51;idm2/products,52;idm2/requirements,52;idm2/rules,52;idm2/templates,52;invoice_claim_new.php,89;job_manager.php,0;jobrunner.php?pid=1,81;jobrunner.php?pid=100,67;jobrunner.php?pid=101,65;jobrunner.php?pid=108,72;jobrunner.php?pid=1112,13;jobrunner.php?pid=12,72;jobrunner.php?pid=127,98;jobrunner.php?pid=13,85;jobrunner.php?pid=14,65;jobrunner.php?pid=2,85;jobrunner.php?pid=21,19;jobrunner.php?pid=22,47;jobrunner.php?pid=23,65;jobrunner.php?pid=24,85;jobrunner.php?pid=25&ud_query_name=1HP_detail_decoding_report_HU,40;jobrunner.php?pid=25&ud_query_name=4_5_statuszu_nem_letiltott_ugyfelek,97;jobrunner.php?pid=25&ud_query_name=act_sales_rep_profitability,12;jobrunner.php?pid=25&ud_query_name=addicional_service_parcels,12;jobrunner.php?pid=25&ud_query_name=add_modify_list,31;jobrunner.php?pid=25&ud_query_name=addr_modify_daily_closed_report,105;jobrunner.php?pid=25&ud_query_name=addr_modify_handled_parcels_delivery,105;jobrunner.php?pid=25&ud_query_name=addr_modify_last_scan_depo1640,105;jobrunner.php?pid=25&ud_query_name=ad_hoc_search_invoiceno,26;jobrunner.php?pid=25&ud_query_name=alap_termekek_lekerdezese,72;jobrunner.php?pid=25&ud_query_name=all_tour_performance_list,85;jobrunner.php?pid=25&ud_query_name=bad_sa04_tour_parcels,85;jobrunner.php?pid=25&ud_query_name=blocked_customers,67;jobrunner.php?pid=25&ud_query_name=check_digit,105;jobrunner.php?pid=25&ud_query_name=claim_interval_report,65;jobrunner.php?pid=25&ud_query_name=clearing_costs,12;jobrunner.php?pid=25&ud_query_name=coda_cash_income_list,67;jobrunner.php?pid=25&ud_query_name=coda_cif_trans_archive_search,67;jobrunner.php?pid=25&ud_query_name=coda_cif_trans_search,67;jobrunner.php?pid=25&ud_query_name=coda_send_pl_cod,67;jobrunner.php?pid=25&ud_query_name=cod_depo_amount,84;jobrunner.php?pid=25&ud_query_name=cod_depo_settlement_xls,84;jobrunner.php?pid=25&ud_query_name=cod_depo_settlement_xls_test,84;jobrunner.php?pid=25&ud_query_name=cod_missing_cod_data,105;jobrunner.php?pid=25&ud_query_name=cod_report_with_direction_v2,105;jobrunner.php?pid=25&ud_query_name=cod_return_parcels,67;jobrunner.php?pid=25&ud_query_name=cod_summary_report,67;jobrunner.php?pid=25&ud_query_name=cod_transfer_list,67;jobrunner.php?pid=25&ud_query_name=cod_transmission,20;jobrunner.php?pid=25&ud_query_name=collection_list_spec_day,105;jobrunner.php?pid=25&ud_query_name=comp_pu_rep_central,81;jobrunner.php?pid=25&ud_query_name=cop_parcel_list,67;jobrunner.php?pid=25&ud_query_name=courier_cost_report,81;jobrunner.php?pid=25&ud_query_name=courier_equipment_spec,81;jobrunner.php?pid=25&ud_query_name=courier_perf_date_interval_hu,65;jobrunner.php?pid=25&ud_query_name=courier_settlement_v3,84;jobrunner.php?pid=25&ud_query_name=cpm_data_verification,13;jobrunner.php?pid=25&ud_query_name=cpm_master_cost_detailed,13;jobrunner.php?pid=25&ud_query_name=cpm_missing_dsw_productmapping,13;jobrunner.php?pid=25&ud_query_name=cpm_missing_revenue_detailed,13;jobrunner.php?pid=25&ud_query_name=create_dwh_data,50;jobrunner.php?pid=25&ud_query_name=creg_list_states,101;jobrunner.php?pid=25&ud_query_name=cr_import_date_interval,105;jobrunner.php?pid=25&ud_query_name=croatian_slovenian_parcels_revenue,12;jobrunner.php?pid=25&ud_query_name=cross_border_cod_addresses,67;jobrunner.php?pid=25&ud_query_name=cust_first_invoice,67;jobrunner.php?pid=25&ud_query_name=customer_cr,105;jobrunner.php?pid=25&ud_query_name=customer_list_with_reps,72;jobrunner.php?pid=25&ud_query_name=customer_list_with_reps_custserv,105;jobrunner.php?pid=25&ud_query_name=customer_list_with_reps_finance,67;jobrunner.php?pid=25&ud_query_name=customer_parcel_density,12;jobrunner.php?pid=25&ud_query_name=customer_pickedup_parcels,72;jobrunner.php?pid=25&ud_query_name=customer_profitability_calc,12;jobrunner.php?pid=25&ud_query_name=customer_regular_pickup,72;jobrunner.php?pid=25&ud_query_name=Customers_cust_dnotes,88;jobrunner.php?pid=25&ud_query_name=customer_sdate_parcels_stops,72;jobrunner.php?pid=25&ud_query_name=customers_dnote_return,105;jobrunner.php?pid=25&ud_query_name=cust_pickups_service_code_domestic,105;jobrunner.php?pid=25&ud_query_name=delisprint_vinfo_query,105;jobrunner.php?pid=25&ud_query_name=delivered_parcels_with_business_type,85;jobrunner.php?pid=25&ud_query_name=delta_service_parcels,65;jobrunner.php?pid=25&ud_query_name=depo_cost_performance,85;jobrunner.php?pid=25&ud_query_name=depo_cost_performance_hu,84;jobrunner.php?pid=25&ud_query_name=destination_country_profitability,12;jobrunner.php?pid=25&ud_query_name=detour_with_warehouse,105;jobrunner.php?pid=25&ud_query_name=dnote_return_depot,105;jobrunner.php?pid=25&ud_query_name=dnote_search,88;jobrunner.php?pid=25&ud_query_name=dnote_search_customer,44;jobrunner.php?pid=25&ud_query_name=dnote_search_customer_new,44;jobrunner.php?pid=25&ud_query_name=dnote_search_missing,88;jobrunner.php?pid=25&ud_query_name=dr_request_page,72;jobrunner.php?pid=25&ud_query_name=dsv_data_export,65;jobrunner.php?pid=25&ud_query_name=dsw_customerno_coda_code_list,67;jobrunner.php?pid=25&ud_query_name=e-invoice_customers,33;jobrunner.php?pid=25&ud_query_name=emag_returned_parcels_rma_nondel,105;jobrunner.php?pid=25&ud_query_name=export_country_summary,12;jobrunner.php?pid=25&ud_query_name=export_marketing_action_parcels_2011,72;jobrunner.php?pid=25&ud_query_name=export_parcels,65;jobrunner.php?pid=25&ud_query_name=express_cod_per_depo,27;jobrunner.php?pid=25&ud_query_name=express_parcels,65;jobrunner.php?pid=25&ud_query_name=express_parcels_report,105;jobrunner.php?pid=25&ud_query_name=extended_1HP_detail_decoding_report,40;jobrunner.php?pid=25&ud_query_name=feladando_szamlak,67;jobrunner.php?pid=25&ud_query_name=felado_feladott_csomagok_HU,65;jobrunner.php?pid=25&ud_query_name=fibu_invoice_list,67;jobrunner.php?pid=25&ud_query_name=finance_customers_cod,67;jobrunner.php?pid=25&ud_query_name=finance_dpd_express_parcels,12;jobrunner.php?pid=25&ud_query_name=finance_other_services_volumen,12;jobrunner.php?pid=25&ud_query_name=finance_weekly_amount_report,67;jobrunner.php?pid=25&ud_query_name=first_day_delivery_performance,72;jobrunner.php?pid=25&ud_query_name=futarok_atlag_fut_telj,85;jobrunner.php?pid=25&ud_query_name=geocoding_pickup_report,61;jobrunner.php?pid=25&ud_query_name=gtr_tcom_status_report,49;jobrunner.php?pid=25&ud_query_name=hand_out_list,97;jobrunner.php?pid=25&ud_query_name=hiinsu_num_of_parcels_dom_ext,47;jobrunner.php?pid=25&ud_query_name=hiinsu_parcels_interval,47;jobrunner.php?pid=25&ud_query_name=idm_phone_report,51;jobrunner.php?pid=25&ud_query_name=international_cod_transfers,67;jobrunner.php?pid=25&ud_query_name=invoice_prod_summary,67;jobrunner.php?pid=25&ud_query_name=ka_kpi_dpd_hu_manual,13;jobrunner.php?pid=25&ud_query_name=ka_performance_daily_manual,105;jobrunner.php?pid=25&ud_query_name=ka_performance_monthly,105;jobrunner.php?pid=25&ud_query_name=kieg_termekek_lekerdezese,12;jobrunner.php?pid=25&ud_query_name=kiszallitasi_idopont_irsz,65;jobrunner.php?pid=25&ud_query_name=kiszallitasi_idopont_irsz_tour,65;jobrunner.php?pid=25&ud_query_name=linehaulon_utazott_csomagok_szama,12;jobrunner.php?pid=25&ud_query_name=list_of_crs,105;jobrunner.php?pid=25&ud_query_name=lmm_cage_balance,56;jobrunner.php?pid=25&ud_query_name=lmm_debrief_report,56;jobrunner.php?pid=25&ud_query_name=lmm_invoice_statistic,56;jobrunner.php?pid=25&ud_query_name=lmm_monthly_cost_total,56;jobrunner.php?pid=25&ud_query_name=lmm_seal_management,56;jobrunner.php?pid=25&ud_query_name=mdu_used_days,85;jobrunner.php?pid=25&ud_query_name=missing_cr_info_scan,105;jobrunner.php?pid=25&ud_query_name=missing_sa04_btw_sa03_scans,85;jobrunner.php?pid=25&ud_query_name=modified_pickups,65;jobrunner.php?pid=25&ud_query_name=modified_sbkcode_list,67;jobrunner.php?pid=25&ud_query_name=monthly_num_of_pl,12;jobrunner.php?pid=25&ud_query_name=next_day_not_delivered,105;jobrunner.php?pid=25&ud_query_name=not_ordered_itemized_delivery,72;jobrunner.php?pid=25&ud_query_name=not_scanned_pods,105;jobrunner.php?pid=25&ud_query_name=not_scanned_pods_days,105;jobrunner.php?pid=25&ud_query_name=ops_courier_error_report,33;jobrunner.php?pid=25&ud_query_name=ops_missing_sa02,85;jobrunner.php?pid=25&ud_query_name=ops_missing_sa05,85;jobrunner.php?pid=25&ud_query_name=ops_missing_sa10_and_sa02,85;jobrunner.php?pid=25&ud_query_name=ops_parcel_with_missing_scans,105;jobrunner.php?pid=25&ud_query_name=ops_tour_stop_parcels,85;jobrunner.php?pid=25&ud_query_name=otrs_agent_performance,105;jobrunner.php?pid=25&ud_query_name=otrs_cust_service_moved_tickets,105;jobrunner.php?pid=25&ud_query_name=otrs_queue_performance,105;jobrunner.php?pid=25&ud_query_name=parcels_without_loading_scan,65;jobrunner.php?pid=25&ud_query_name=per_prod_delivery_performance_hu,67;jobrunner.php?pid=25&ud_query_name=pl_count_sum_weight_linheaul,12;jobrunner.php?pid=25&ud_query_name=pods_per_depos_and_tours_hu,105;jobrunner.php?pid=25&ud_query_name=postal_code_sa05_and_sa03_parcels,85;jobrunner.php?pid=25&ud_query_name=price_list_query,67;jobrunner.php?pid=25&ud_query_name=productivity_stat,85;jobrunner.php?pid=25&ud_query_name=product_profitability,12;jobrunner.php?pid=25&ud_query_name=PUDO_tour_monthly,63;jobrunner.php?pid=25&ud_query_name=PUDO_tour_monthly_v2,63;jobrunner.php?pid=25&ud_query_name=PUDO_tour_monthly_v3,63;jobrunner.php?pid=25&ud_query_name=real_itemized_deliveries,105;jobrunner.php?pid=25&ud_query_name=relation_statistics_per_parcel,65;jobrunner.php?pid=25&ud_query_name=relation_statistics_per_parcel_with_weight,65;jobrunner.php?pid=25&ud_query_name=report_volumes_and_revenue,33;jobrunner.php?pid=25&ud_query_name=riport_predict_timeframe,105;jobrunner.php?pid=25&ud_query_name=riport_predict_timeframe_v2,105;jobrunner.php?pid=25&ud_query_name=rod_documents_report_HU,25;jobrunner.php?pid=25&ud_query_name=sa05_customer_allinfo,33;jobrunner.php?pid=25&ud_query_name=sales_add_creditcard,12;jobrunner.php?pid=25&ud_query_name=sales_add_hiper,12;jobrunner.php?pid=25&ud_query_name=sales_add_idcheck,12;jobrunner.php?pid=25&ud_query_name=sales_add_idm,12;jobrunner.php?pid=25&ud_query_name=sales_add_others,12;jobrunner.php?pid=25&ud_query_name=sales_address_num_of_pls,72;jobrunner.php?pid=25&ud_query_name=sales_add_samedaypickup,12;jobrunner.php?pid=25&ud_query_name=sales_add_saturdaydelivery,12;jobrunner.php?pid=25&ud_query_name=sales_all_visits,72;jobrunner.php?pid=25&ud_query_name=sales_customer_revenue,100;jobrunner.php?pid=25&ud_query_name=sales_lead_query,72;jobrunner.php?pid=25&ud_query_name=sales_leads_by_tour,81;jobrunner.php?pid=25&ud_query_name=sales_planned_visits,72;jobrunner.php?pid=25&ud_query_name=sales_planning_real_data,100;jobrunner.php?pid=25&ud_query_name=sales_rep_profitability,100;jobrunner.php?pid=25&ud_query_name=sales_ro_number_of_parcels,12;jobrunner.php?pid=25&ud_query_name=sales_sum_visits_HU,12;jobrunner.php?pid=25&ud_query_name=scan_07_per_day_per_tour,85;jobrunner.php?pid=25&ud_query_name=scandata_to_bericht_ondemand,33;jobrunner.php?pid=25&ud_query_name=scan_files,98;jobrunner.php?pid=25&ud_query_name=sc_dante_660013007_felulbizt,47;jobrunner.php?pid=25&ud_query_name=seles_ugyfel_arlistak,72;jobrunner.php?pid=25&ud_query_name=sender_sa03_parcels,65;jobrunner.php?pid=25&ud_query_name=smm_costs_in_interval,12;jobrunner.php?pid=25&ud_query_name=smm_invoice_items,86;jobrunner.php?pid=25&ud_query_name=smm_invoice_statistic,77;jobrunner.php?pid=25&ud_query_name=statusdata_with_customerno_and_filename,65;jobrunner.php?pid=25&ud_query_name=subcontr_settlement_depo_data,67;jobrunner.php?pid=25&ud_query_name=subcontr_settl_interval_data,67;jobrunner.php?pid=25&ud_query_name=subcontr_settl_linehaul_interval,33;jobrunner.php?pid=25&ud_query_name=sum_revenue_per_customer_in_interval,12;jobrunner.php?pid=25&ud_query_name=szamlak_listaja,86;jobrunner.php?pid=25&ud_query_name=szamlazando_kontroll_report,67;jobrunner.php?pid=25&ud_query_name=torolt_ugyfelek_pickupjai,97;jobrunner.php?pid=25&ud_query_name=tour_arrived_depo,98;jobrunner.php?pid=25&ud_query_name=tour_cost_performance,84;jobrunner.php?pid=25&ud_query_name=tour_cost_performance_old,0;jobrunner.php?pid=25&ud_query_name=tour_distance_km_gps,40;jobrunner.php?pid=25&ud_query_name=tour_performance_b2b_b2c,85;jobrunner.php?pid=25&ud_query_name=tour_phone_numbers,105;jobrunner.php?pid=25&ud_query_name=tour_settlement,105;jobrunner.php?pid=25&ud_query_name=tura_kezbesitesi_adatok,105;jobrunner.php?pid=25&ud_query_name=warehouse_ellenorzes,94;jobrunner.php?pid=25&ud_query_name=weblabel_addresses_sales_query,72;jobrunner.php?pid=25&ud_query_name=weblabeles_ugyfelek_akik_tenyleg_adnek_fel,72;jobrunner.php?pid=25&ud_query_name=weekly_performance_report,33;jobrunner.php?pid=25&ud_query_name=weight_compare,72;jobrunner.php?pid=25&ud_query_name=wuerth_inv_appendix,67;jobrunner.php?pid=25&ud_query_name=xps_szamlamelleklet,105;jobrunner.php?pid=26,67;jobrunner.php?pid=27,46;jobrunner.php?pid=345,40;jobrunner.php?pid=36,87;jobrunner.php?pid=39,81;jobrunner.php?pid=4,65;jobrunner.php?pid=44,81;jobrunner.php?pid=45,13;jobrunner.php?pid=46,13;jobrunner.php?pid=48,100;jobrunner.php?pid=49,100;jobrunner.php?pid=5,65;jobrunner.php?pid=50,100;jobrunner.php?pid=51,100;jobrunner.php?pid=52,12;jobrunner.php?pid=53,100;jobrunner.php?pid=54,67;jobrunner.php?pid=55,97;jobrunner.php?pid=6,65;jobrunner.php?pid=7,85;jobrunner.php?pid=72,56;jobrunner.php?pid=8,65;jobrunner.php?pid=80,56;jobrunner.php?pid=82,72;jobrunner.php?pid=9,65;jobrunner.php?pid=92,12;ka_kpi_report.php,65;login.php?action=logout,0;main.php,0;maxi3_normal_print.php,105;maxi3_visszaru_print.php,105;parcel_query.php,65;pl_ml_search.php,105;pr_add_address_open_old.php?from=ufsz,99;pr_add_address_open.php?from=ufsz,41;pr_add_address_open_v1.php?from=ufsz,41;pr_dispatcher_open_old.php,40;pr_georoute_change_tours_old.php,40;prob_ugyf_idoszak.php,65;pr_pickup_customer_old.php,40;pr_pickup_customer.php,40;pr_print_old.php,40;pr_print.php,40;pr_search_old.php,105;pr_tourlist_old.php,40;pr_tourlist.php,40;raktarra_vetel_thermo.php,105;register/adrights,33;register/loadingscanrules,40;register/scanrules,33;register/sensors,65;right_management.php,33;sales_address_search.php,72;sales_customer_list.php,72;sales_customer_status.php,12;sales_discount_request_hu.php,72;sales_discount_request_search.php,72;sales_new_visits_hu.php,72;sales_rep_planning.php,100;sales_visitlist.php,72;sales_visit_planning_hu.php,72;sales_visit_planning_search.php,72;sales_visit_search_HU.php,72;sc_invoice_accrual.php,86;sc_invoice_date_intervals.php,86;sc_invoice_entry.php,86;sc_invoice_send.php,86;subcontractor_performance.php,81;szamla_forgalom.php,67;tour_credit_list.php,87;tour_credit.php,87;tour_credit_sum_list.php,87;tour_daily_check.php,81;ttevents_query.php,65;udq_report_settings.php,33;ud_queries_customer.php,13;ud_queries.php,6;user_rights.php,33;view_weekly_extended_1HP_dd_report.php,40;wire_transfer_reports.php,0"



    var menuelement = document.querySelectorAll(".drop_down_level_menu");
    //var f = $('span:first', e);
    for(var i = 0; i<menuelement.length;i++){
       //set id
       menuelement[i].setAttribute('id','access'+i);


       var span = menuelement[i].querySelector('span');
       var urlAddress = menuelement[i].querySelector('a').getAttribute("href");
       var spanText = span.innerText;

        var urlWithAccesslevel_array = string_to_array(urlWithAccesslevel);

        var right = IDandAccessLevel(urlAddress,urlWithAccesslevel_array,span,spanText);

        if(right != ''){
          //accessID = menuelement[i].getAttribute('id')+";";

          appendTheRightToParentMenuPoints(menuelement[i],right)
          //consoleWriteMenuHierarchia(accessID)
        }
    }
    var accessID

    //ez a rész összefűzi a jogokat consolera, nem fontos ha csak nem kérnek meg hogy a jogokat exportáld ki egy file-ba
    /*for(var j = 1;j<menuelement.length;j++){
          accessID = menuelement[j].getAttribute('id');
          consoleWriteMenuHierarchia(accessID)
    }*/
}

function consoleWriteMenuHierarchia(input){

    var elem = document.getElementById(input);
    var result = "";
    if(elem.querySelector('a').getAttribute("href") == '#' || elem.querySelector('a').getAttribute("href") == null) return;
        //console.log(elem.querySelector('a').getAttribute("href"))

    //console.log(elem.parentNode.parentNode.getAttribute("class"));

    var header = elem.closest('.main_level_menu')
    var spanHeadertext = header.querySelector('span');
    //var result = spanHeader.innerHTML+" >> ";
    while (elem.parentNode.getAttribute("class") != "main_level_menu") {

        if(elem.getAttribute("class") == "drop_down_level_menu"){
           var span = elem.querySelector('span')
           result += span.innerHTML+";";
        }


         elem = elem.parentNode;
    }
    result = result + spanHeadertext.innerHTML;

    result = transparent(result);

    console.log(result)

/*


    for(var i = array.length-1; i >= 0 ;i--){
       var id = array[i]

       var currentNode = document.getElementById(id)
       var span = currentNode.querySelector('span')
       var spanText = span.innerHTML;

       if(i == 0){
            result = result + spanText
       }else{
            result = result + spanText + " >> "
       }
    }
    console.log(result+":"+ input)*/
}


function transparent(input){
   var array = input.split(";");
   var result = "";
   for(var i = array.length-1; i >= 0 ;i--){
       if(i == 0){
            result+=array[i]
       }else result+=array[i] + " >> "

   }
   return result;
}

function IDandAccessLevel(urlAddress,user_right_array,span,spanText){
    var right = '';

       for(var j = 0; j < user_right_array.length && urlAddress != null;j++){
            var array = user_right_array[j].split(',');
            if(urlAddress.replace('https://10.2.20.23/dpdregister/www/') == array[0]){
                span.innerHTML = spanText + ' - ' + array[1];
                //console.log(urlAddress);
                right = array[1]
                break;
            }
        }
    return right
}

function string_to_array(inputString){
    var array = inputString.split(';')
    return array;
}

function appendTheRightToParentMenuPoints(childNode,right){
    let currentNodeId = getParentMenuNode(childNode)
    var currentNode = '';

    if(currentNodeId != ''){
     currentNode = document.getElementById(currentNodeId)
     var span = currentNode.querySelector('span')
     var spanText = span.innerHTML;
     if(!spanText.include(right)){
         span.innerHTML = spanText + ' ' + right;
         appendTheRightToParentMenuPoints(currentNode,right);
     }
    }

    return currentNode
}

/*
function appendTheRightToParentMenuPoints(childNode,right){
    let currentNode = getParentMenuNode(childNode)
    console.log(currentNode)
    if(currentNode == null) return ''
         var currentNodespam = currentNode.queryselector('span');
         var currentNodeText = currentNode.innerHTML;
         console.log(currentNode)

         if(!currentNodeText.include(right)){
            currentNode.innerHTML = currentNodeText + ' ' + right;
            var parentThisNode = getParentMenuNode(childNode)
            if(parentThisNode!= null) appendTheRightToParentMenuPoints(parentThisNode,right)
         }
    return currentNode
}
*/
function getParentMenuNode(element){
    //var parentNode = $(element).parent()
    var parentNode = element.parentNode;

    var value
    var currentElementClass = parentNode.getAttribute('class');


    if(currentElementClass == "main_level_menu" || currentElementClass == "main_level_menu active"){
       return ''
    }else{

       if(currentElementClass == "drop_down_level_menu"){

           return parentNode.getAttribute('id')
       }else{
           value = getParentMenuNode(parentNode)
           return value
       }
    }
}


// register database -> t_digits_dev -> main_menu_with_rights materilized views
// itt bent van az összejogosultság URL együtt, ebben a viewban találjátok meg az SQL parancsot, azt modosítottam kicsit

/* sql query

 SELECT
    tmp2.url,
    tmp2.access_level
   FROM ( SELECT DISTINCT ON (tmp.l1, tmp.l2, tmp.l3, tmp.l4, tmp.l5, tmp.l6, tmp.id) tmp.l1,
            tmp.l2,
            tmp.l3,
            tmp.l4,
            tmp.l5,
            tmp.l6,
            tmp.url,
            tmp.title,
            tmp.parent,
            tmp.access_level,
            tmp.id,
            tmp.module_id
           FROM ( SELECT f.l1,
                    f.l2,
                    f.l3,
                    f.l4,
                    f.l5,
                    f.l6,
                    f.url,
                    f.title,
                    f.parent,
                    f.access_level,
                    f.id,
                    f.module_id
                   FROM ( SELECT mm.l1,
                            mm.l2,
                            mm.l3,
                            mm.l4,
                            mm.l5,
                            mm.l6,
                            mm.url,
                            mm.title,
                            mm.parent,
                            COALESCE(fh.accesslevel, udq.access_level, jr.access_level, pr.access_level) AS access_level,
                            mm.id::text AS id,
                            mm.module_id
                           FROM main_menu mm
                             LEFT JOIN php_rights pr ON ('/dpdregister/www/'::text || mm.url::text) ~~ (pr.scriptname::text || '%'::text) AND pr.scriptname::text !~~ '%dpdregister_debug%'::text
                             LEFT JOIN formcreator.form_head fh ON mm.url::text = ('form_creator.php?formid='::text || fh.id::text) OR mm.url::text ~~ (('%form_creator.php?formid='::text || fh.id::text) || '&%'::text) OR mm.url::text ~~ ('%form_creator.php?fgroupid='::text || fh.group_id::text) OR mm.url::text ~~ (('%form_creator.php?fgroupid='::text || fh.group_id::text) || '&%'::text)
                             LEFT JOIN ud_queries.queries udq ON udq.query_name::text = split_part(mm.url::text, '='::text, 3) AND mm.url::text !~~ 'ud_query_name'::text
                             LEFT JOIN job_runner jr ON (mm.url::text = ('jobrunner.php?pid='::text || jr.id) OR mm.url::text ~~ (('jobrunner.php?pid='::text || jr.id) || '&%'::text)) AND mm.url::text !~~ 'ud_query_name'::text
                        UNION
                         SELECT g.l1,
                            g.l2,
                            g.l3,
                            g.l4,
                            g.l5,
                            NULL::integer AS l6,
                            'jobrunner.php?pid=25&ud_query_name='::text || q.query_name::text AS url,
                            getlangtext('EN'::character varying, q.query_name) AS title,
                            false AS parent,
                            q.access_level,
                            'UDQ_'::text || q.id::text AS id,
                            NULL::integer AS modul_id
                           FROM ud_queries.query_group g
                             JOIN ud_queries.queries q ON q.query_group = g.id
                             JOIN ud_queries.queries_attributes a_1 ON q.query_name::text = a_1.query_name::text
                          WHERE g.displayed_in_menu IS TRUE AND a_1.enabled IS TRUE) f) tmp) tmp2

  GROUP BY tmp2.url,tmp2.access_level


*/
