const GET_INVESTIGATION_RESULTS_PARTIAL_PARSE = {
  GetInvestigationResultsResult: {
    AccountName: 'CCSIntegration',
    ErrorResponse: { nil: true },
    RequestKey: 'f214bb46-e1db-47a0-9e12-8aa90e5a922b',
    ResponseType: 'Success',
    ClientKey: 'f8f12125-6686-4431-9f70-991da2b39f40',
    CreditBureau: '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<ns0:creditBureau xmlns:ns1="com.tuc.common" xmlns:ns0="http://www.transunion.com/disclosure">\n' +
      ' <ns0:version>2</ns0:version>\n' +
      ' <ns0:transactionControl>\n' +
      '    <ns0:tracking>\n' +
      '       <ns0:transactionTimeStamp>2018-03-09T13:38:31.131-06:00</ns0:transactionTimeStamp>\n' +
      '       <ns0:language>en</ns0:language>\n' +
      '       <ns0:identifier>\n' +
      '          <ns1:fin>000300010987</ns1:fin>\n' +
      '          <ns1:activityNumber>109</ns1:activityNumber>\n' +
      '          <ns1:partyId>1078425505</ns1:partyId>\n' +
      '       </ns0:identifier>\n' +
      '       <ns0:responseCode>0</ns0:responseCode>\n' +
      '       <ns0:responseMessage>Success</ns0:responseMessage>\n' +
      '    </ns0:tracking>\n' +
      ' </ns0:transactionControl>\n' +
      ' <ns0:productArray>\n' +
      '    <ns0:product>\n' +
      '       <ns0:code>7001</ns0:code>\n' +
      '       <ns0:subject>\n' +
      '          <ns0:fileAccessCode>*** 300010987-109 ***</ns0:fileAccessCode>\n' +
      '          <ns0:enclosures>\n' +
      '             <ns0:codes>\n' +
      '                <ns0:code>28</ns0:code>\n' +
      '                <ns0:type>00</ns0:type>\n' +
      '                <ns0:versionNo>1</ns0:versionNo>\n' +
      '             </ns0:codes>\n' +
      '             <ns0:codes>\n' +
      '                <ns0:code>29</ns0:code>\n' +
      '                <ns0:type>00</ns0:type>\n' +
      '                <ns0:versionNo>1</ns0:versionNo>\n' +
      '             </ns0:codes>\n' +
      '             <ns0:codes>\n' +
      '                <ns0:code>32</ns0:code>\n' +
      '                <ns0:type>00</ns0:type>\n' +
      '                <ns0:versionNo>1</ns0:versionNo>\n' +
      '             </ns0:codes>\n' +
      '             <ns0:addresseeContact>\n' +
      '                <ns0:name>\n' +
      '                   <ns0:unparsed>DORA G. JULIEN</ns0:unparsed>\n' +
      '                </ns0:name>\n' +
      '                <ns0:address>\n' +
      '                   <ns0:street>\n' +
      '                      <ns0:unparsed>PO BOX 384</ns0:unparsed>\n' +
      '                   </ns0:street>\n' +
      '                   <ns0:location>\n' +
      '                      <ns0:unparsed>BRAHAM, MN 55006-0384</ns0:unparsed>\n' +
      '                   </ns0:location>\n' +
      '                   <ns0:order>1</ns0:order>\n' +
      '                </ns0:address>\n' +
      '             </ns0:addresseeContact>\n' +
      '             <ns0:returnMailContact>\n' +
      '                <ns0:name>\n' +
      '                   <ns0:unparsed>TransUnion Consumer Relations</ns0:unparsed>\n' +
      '                </ns0:name>\n' +
      '                <ns0:address>\n' +
      '                   <ns0:street>\n' +
      '                      <ns0:unparsed>P.O. Box 2000</ns0:unparsed>\n' +
      '                   </ns0:street>\n' +
      '                   <ns0:location>\n' +
      '                      <ns0:unparsed>Chester, PA 19016-2000</ns0:unparsed>\n' +
      '                   </ns0:location>\n' +
      '                   <ns0:order>1</ns0:order>\n' +
      '                </ns0:address>\n' +
      '             </ns0:returnMailContact>\n' +
      '          </ns0:enclosures>\n' +
      '          <ns0:subjectRecord>\n' +
      '             <ns0:fileSummary>\n' +
      '                <ns0:inFileSinceDate>06/25/2006</ns0:inFileSinceDate>\n' +
      '                <ns0:disclosureCoverInfo>\n' +
      '                   <ns0:coverCode>15</ns0:coverCode>\n' +
      '                   <ns0:versionNo>1</ns0:versionNo>\n' +
      '                   <ns0:disputeURL>www.transunion.com/disputeonline</ns0:disputeURL>\n' +
      '                   <ns0:summarySection>\n' +
      '                      <ns0:lineItem>\n' +
      '                         <ns0:itemKey>9X4X6X3_4871356_7X</ns0:itemKey>\n' +
      '                         <ns0:itemType>14</ns0:itemType>\n' +
      '                         <ns0:credit>\n' +
      '                            <ns0:item>\n' +
      '                               <ns0:itemName>CHAPTER 7 BANKRUPTCY DISCHARGED</ns0:itemName>\n' +
      '                               <ns0:subscriber>\n' +
      '                                  <ns0:name>\n' +
      '                                     <ns0:unparsed>MINNESOTA FEDERAL COURT-</ns0:unparsed>\n' +
      '                                  </ns0:name>\n' +
      '                                  <ns0:address>\n' +
      '                                     <ns0:street>\n' +
      '                                        <ns0:unparsed>300 S 4TH STREET</ns0:unparsed>\n' +
      '                                     </ns0:street>\n' +
      '                                     <ns0:location>\n' +
      '                                        <ns0:unparsed>MINNEAPOLIS, MN 55415</ns0:unparsed>\n' +
      '                                        <ns0:city>MINNEAPOLIS</ns0:city>\n' +
      '                                        <ns0:state>MN</ns0:state>\n' +
      '                                        <ns0:zipCode>55415</ns0:zipCode>\n' +
      '                                     </ns0:location>\n' +
      '                                  </ns0:address>\n' +
      '                                  <ns0:phone>\n' +
      '                                     <ns0:unparsed>(612) 664-5200</ns0:unparsed>\n' +
      '                                     <ns0:areaCode>612</ns0:areaCode>\n' +
      '                                     <ns0:exchange>664</ns0:exchange>\n' +
      '                                     <ns0:suffix>5200</ns0:suffix>\n' +
      '                                  </ns0:phone>\n' +
      '                               </ns0:subscriber>\n' +
      '                            </ns0:item>\n' +
      '                            <ns0:description>\n' +
      '                               <ns0:descriptionText>DOCKET# 9X4X6X3</ns0:descriptionText>\n' +
      '                            </ns0:description>\n' +
      '                            <ns0:result>VERIFIED AS ACCURATE</ns0:result>\n' +
      '                         </ns0:credit>\n' +
      '                      </ns0:lineItem>\n' +
      '                      <ns0:lineItem>\n' +
      '                         <ns0:itemKey>5X5X2X1X7X0X0_1972038_R</ns0:itemKey>\n' +
      '                         <ns0:itemType>13</ns0:itemType>\n' +
      '                         <ns0:credit>\n' +
      '                            <ns0:item>\n' +
      '                               <ns0:subscriber>\n' +
      '                                  <ns0:name>\n' +
      '                                     <ns0:unparsed>JC PENNEY</ns0:unparsed>\n' +
      '                                  </ns0:name>\n' +
      '                                  <ns0:address>\n' +
      '                                     <ns0:street>\n' +
      '                                        <ns0:unparsed>PO BOX 981026</ns0:unparsed>\n' +
      '                                     </ns0:street>\n' +
      '                                     <ns0:location>\n' +
      '                                        <ns0:unparsed>EL PASO, TX 79998-1206</ns0:unparsed>\n' +
      '                                        <ns0:city>EL PASO</ns0:city>\n' +
      '                                        <ns0:state>TX</ns0:state>\n' +
      '                                        <ns0:zipCode>79998</ns0:zipCode>\n' +
      '                                        <ns0:zipExt>1206</ns0:zipExt>\n' +
      '                                     </ns0:location>\n' +
      '                                  </ns0:address>\n' +
      '                                  <ns0:phone>\n' +
      '                                     <ns0:unparsed>(800) 542-0800</ns0:unparsed>\n' +
      '                                     <ns0:areaCode>800</ns0:areaCode>\n' +
      '                                     <ns0:exchange>542</ns0:exchange>\n' +
      '                                     <ns0:suffix>0800</ns0:suffix>\n' +
      '                                  </ns0:phone>\n' +
      '                               </ns0:subscriber>\n' +
      '                            </ns0:item>\n' +
      '                            <ns0:description>\n' +
      '                               <ns0:descriptionText># 5X5X2X1X7X0X0</ns0:descriptionText>\n' +
      '                            </ns0:description>\n' +
      '                            <ns0:result>DELETED</ns0:result>\n' +
      '                         </ns0:credit>\n' +
      '                      </ns0:lineItem>\n' +
      '                   </ns0:summarySection>\n' +
      '                   <ns0:resellerOperatorId> </ns0:resellerOperatorId>\n' +
      '                </ns0:disclosureCoverInfo>\n' +
      '             </ns0:fileSummary>\n' +
      '             <ns0:indicative>\n' +
      '                <ns0:name>\n' +
      '                   <ns0:person>\n' +
      '                      <ns0:unparsed>DORA G. JULIEN</ns0:unparsed>\n' +
      '                      <ns0:first>DORA</ns0:first>\n' +
      '                      <ns0:middle>G</ns0:middle>\n' +
      '                      <ns0:last>JULIEN</ns0:last>\n' +
      '                      <ns0:order>1</ns0:order>\n' +
      '                   </ns0:person>\n' +
      '                </ns0:name>\n' +
      '                <ns0:address>\n' +
      '                   <ns0:street>\n' +
      '                      <ns0:unparsed>PO BOX 384</ns0:unparsed>\n' +
      '                      <ns0:number>384</ns0:number>\n' +
      '                      <ns0:name>PO BOX</ns0:name>\n' +
      '                   </ns0:street>\n' +
      '                   <ns0:location>\n' +
      '                      <ns0:unparsed>BRAHAM, MN 55006-0384</ns0:unparsed>\n' +
      '                      <ns0:city>BRAHAM</ns0:city>\n' +
      '                      <ns0:state>MN</ns0:state>\n' +
      '                      <ns0:zipCode>55006</ns0:zipCode>\n' +
      '                      <ns0:zipExt>0384</ns0:zipExt>\n' +
      '                   </ns0:location>\n' +
      '                   <ns0:dateReported>09/02/2015</ns0:dateReported>\n' +
      '                   <ns0:order>1</ns0:order>\n' +
      '                </ns0:address>\n' +
      '                <ns0:socialSecurity>\n' +
      '                   <ns0:number>471-86-6871</ns0:number>\n' +
      '                   <ns0:order>1</ns0:order>\n' +
      '                </ns0:socialSecurity>\n' +
      '             </ns0:indicative>\n' +
      '             <ns0:custom>\n' +
      '                <ns0:credit>\n' +
      '                   <ns0:trade>\n' +
      '                      <ns0:itemKey>4X2X7X1X9X2X5X6X_927P029_R</ns0:itemKey>\n' +
      '                      <ns0:subscriber>\n' +
      '                         <ns0:industryCode>BY</ns0:industryCode>\n' +
      '                         <ns0:memberCode>927P029</ns0:memberCode>\n' +
      '                         <ns0:name>\n' +
      '                            <ns0:unparsed>CARD PRODUCTS</ns0:unparsed>\n' +
      '                         </ns0:name>\n' +
      '                         <ns0:address>\n' +
      '                            <ns0:street>\n' +
      '                               <ns0:unparsed>PO BOX 563966</ns0:unparsed>\n' +
      '                            </ns0:street>\n' +
      '                            <ns0:location>\n' +
      '                               <ns0:unparsed>CHARLOTTE, NC 28256-0001</ns0:unparsed>\n' +
      '                               <ns0:city>CHARLOTTE</ns0:city>\n' +
      '                               <ns0:state>NC</ns0:state>\n' +
      '                               <ns0:zipCode>28256</ns0:zipCode>\n' +
      '                               <ns0:zipExt>0001</ns0:zipExt>\n' +
      '                            </ns0:location>\n' +
      '                         </ns0:address>\n' +
      '                         <ns0:phone>\n' +
      '                            <ns0:number>\n' +
      '                               <ns0:unparsed>Phone number not available</ns0:unparsed>\n' +
      '                            </ns0:number>\n' +
      '                         </ns0:phone>\n' +
      '                      </ns0:subscriber>\n' +
      '                      <ns0:portfolioType>revolving</ns0:portfolioType>\n' +
      '                      <ns0:accountNumber>4X2X7X1X9X2X5X6X</ns0:accountNumber>\n' +
      '                      <ns0:ECOADesignator>individual</ns0:ECOADesignator>\n' +
      '                      <ns0:dateOpened>06/16/2013</ns0:dateOpened>\n' +
      '                      <ns0:dateEffectiveLabel>DateUpdated</ns0:dateEffectiveLabel>\n' +
      '                      <ns0:dateEffective>11/05/2016</ns0:dateEffective>\n' +
      '                      <ns0:dateClosed>09/26/2015</ns0:dateClosed>\n' +
      '                      <ns0:highCredit>4930</ns0:highCredit>\n' +
      '                      <ns0:accountRating>BK</ns0:accountRating>\n' +
      '                      <ns0:remark>\n' +
      '                         <ns0:code>BKL</ns0:code>\n' +
      '                         <ns0:type>affiliate</ns0:type>\n' +
      '                         <ns0:description>>INCLUDED IN BANKRUPTCY&lt;</ns0:description>\n' +
      '                      </ns0:remark>\n' +
      '                      <ns0:terms>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:terms>\n' +
      '                      <ns0:account>\n' +
      '                         <ns0:code>CC</ns0:code>\n' +
      '                         <ns0:description>CREDIT CARD</ns0:description>\n' +
      '                      </ns0:account>\n' +
      '                      <ns0:paymentHistory/>\n' +
      '                      <ns0:mostRecentPayment>\n' +
      '                         <ns0:date>05/31/2015</ns0:date>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:mostRecentPayment>\n' +
      '                      <ns0:additionalTradeAccount>\n' +
      '                         <ns0:original/>\n' +
      '                      </ns0:additionalTradeAccount>\n' +
      '                      <ns0:suppressionFlag>false</ns0:suppressionFlag>\n' +
      '                      <ns0:adverseFlag>true</ns0:adverseFlag>\n' +
      '                      <ns0:estimatedDeletionDate>10/2022</ns0:estimatedDeletionDate>\n' +
      '                      <ns0:accountRatingDescription>>Account Included in Bankruptcy&lt;</ns0:accountRatingDescription>\n' +
      '                      <ns0:portfolioTypeDescription>Revolving Account</ns0:portfolioTypeDescription>\n' +
      '                      <ns0:ECOADesignatorDescription>Individual Account</ns0:ECOADesignatorDescription>\n' +
      '                      <ns0:histPaymentDueList></ns0:histPaymentDueList>\n' +
      '                      <ns0:histPaymentAmtList></ns0:histPaymentAmtList>\n' +
      '                      <ns0:histBalanceList></ns0:histBalanceList>\n' +
      '                      <ns0:histPastDueList></ns0:histPastDueList>\n' +
      '                      <ns0:histRemarkList></ns0:histRemarkList>\n' +
      '                      <ns0:isCollection>false</ns0:isCollection>\n' +
      '                   </ns0:trade>\n' +
      '                   <ns0:trade>\n' +
      '                      <ns0:itemKey>4X2X1X0X2X0X5X0X_402D013_R</ns0:itemKey>\n' +
      '                      <ns0:subscriber>\n' +
      '                         <ns0:industryCode>BC</ns0:industryCode>\n' +
      '                         <ns0:memberCode>402D013</ns0:memberCode>\n' +
      '                         <ns0:name>\n' +
      '                            <ns0:unparsed>CHASE NA</ns0:unparsed>\n' +
      '                         </ns0:name>\n' +
      '                         <ns0:address>\n' +
      '                            <ns0:street>\n' +
      '                               <ns0:unparsed>880 BROOKS EDGE BLVD</ns0:unparsed>\n' +
      '                            </ns0:street>\n' +
      '                            <ns0:location>\n' +
      '                               <ns0:unparsed>WESTERVILLE, OH 43081</ns0:unparsed>\n' +
      '                               <ns0:city>WESTERVILLE</ns0:city>\n' +
      '                               <ns0:state>OH</ns0:state>\n' +
      '                               <ns0:zipCode>43081</ns0:zipCode>\n' +
      '                            </ns0:location>\n' +
      '                         </ns0:address>\n' +
      '                         <ns0:phone>\n' +
      '                            <ns0:number>\n' +
      '                               <ns0:unparsed>Phone number not available</ns0:unparsed>\n' +
      '                            </ns0:number>\n' +
      '                         </ns0:phone>\n' +
      '                      </ns0:subscriber>\n' +
      '                      <ns0:portfolioType>revolving</ns0:portfolioType>\n' +
      '                      <ns0:accountNumber>4X2X1X0X2X0X5X0X</ns0:accountNumber>\n' +
      '                      <ns0:ECOADesignator>individual</ns0:ECOADesignator>\n' +
      '                      <ns0:dateOpened>02/08/2013</ns0:dateOpened>\n' +
      '                      <ns0:dateEffectiveLabel>DateUpdated</ns0:dateEffectiveLabel>\n' +
      '                      <ns0:dateEffective>11/04/2015</ns0:dateEffective>\n' +
      '                      <ns0:dateClosed>08/01/2015</ns0:dateClosed>\n' +
      '                      <ns0:datePaidOut>10/13/2015</ns0:datePaidOut>\n' +
      '                      <ns0:currentBalance>0</ns0:currentBalance>\n' +
      '                      <ns0:highCredit>4666</ns0:highCredit>\n' +
      '                      <ns0:creditLimit>4600</ns0:creditLimit>\n' +
      '                      <ns0:accountRating>BK</ns0:accountRating>\n' +
      '                      <ns0:remark>\n' +
      '                         <ns0:code>CBL</ns0:code>\n' +
      '                         <ns0:type>affiliate</ns0:type>\n' +
      '                         <ns0:description>>CHAPTER 7 BANKRUPTCY&lt;</ns0:description>\n' +
      '                      </ns0:remark>\n' +
      '                      <ns0:terms>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:terms>\n' +
      '                      <ns0:paymentHistory/>\n' +
      '                      <ns0:mostRecentPayment>\n' +
      '                         <ns0:date>07/19/2015</ns0:date>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:mostRecentPayment>\n' +
      '                      <ns0:additionalTradeAccount>\n' +
      '                         <ns0:original/>\n' +
      '                      </ns0:additionalTradeAccount>\n' +
      '                      <ns0:suppressionFlag>false</ns0:suppressionFlag>\n' +
      '                      <ns0:adverseFlag>true</ns0:adverseFlag>\n' +
      '                      <ns0:estimatedDeletionDate>04/2022</ns0:estimatedDeletionDate>\n' +
      '                      <ns0:accountRatingDescription>>Account Included in Bankruptcy&lt;</ns0:accountRatingDescription>\n' +
      '                      <ns0:portfolioTypeDescription>Revolving Account</ns0:portfolioTypeDescription>\n' +
      '                      <ns0:ECOADesignatorDescription>Individual Account</ns0:ECOADesignatorDescription>\n' +
      '                      <ns0:histPaymentDueList></ns0:histPaymentDueList>\n' +
      '                      <ns0:histPaymentAmtList></ns0:histPaymentAmtList>\n' +
      '                      <ns0:histBalanceList></ns0:histBalanceList>\n' +
      '                      <ns0:histPastDueList></ns0:histPastDueList>\n' +
      '                      <ns0:histRemarkList></ns0:histRemarkList>\n' +
      '                      <ns0:isCollection>false</ns0:isCollection>\n' +
      '                   </ns0:trade>\n' +
      '                   <ns0:trade>\n' +
      '                      <ns0:itemKey>5X9X5X9X0X1X1X9X_8194006_R</ns0:itemKey>\n' +
      '                      <ns0:subscriber>\n' +
      '                         <ns0:industryCode>BC</ns0:industryCode>\n' +
      '                         <ns0:memberCode>8194006</ns0:memberCode>\n' +
      '                         <ns0:name>\n' +
      '                            <ns0:unparsed>CITIBANK UCS</ns0:unparsed>\n' +
      '                         </ns0:name>\n' +
      '                         <ns0:address>\n' +
      '                            <ns0:street>\n' +
      '                               <ns0:unparsed>701 E 60TH ST N</ns0:unparsed>\n' +
      '                            </ns0:street>\n' +
      '                            <ns0:location>\n' +
      '                               <ns0:unparsed>SIOUX FALLS, SD 57104</ns0:unparsed>\n' +
      '                               <ns0:city>SIOUX FALLS</ns0:city>\n' +
      '                               <ns0:state>SD</ns0:state>\n' +
      '                               <ns0:zipCode>57104</ns0:zipCode>\n' +
      '                            </ns0:location>\n' +
      '                         </ns0:address>\n' +
      '                         <ns0:phone>\n' +
      '                            <ns0:number>\n' +
      '                               <ns0:unparsed>(904) 954-7500</ns0:unparsed>\n' +
      '                               <ns0:areaCode>904</ns0:areaCode>\n' +
      '                               <ns0:exchange>954</ns0:exchange>\n' +
      '                               <ns0:suffix>7500</ns0:suffix>\n' +
      '                            </ns0:number>\n' +
      '                         </ns0:phone>\n' +
      '                      </ns0:subscriber>\n' +
      '                      <ns0:portfolioType>revolving</ns0:portfolioType>\n' +
      '                      <ns0:accountNumber>5X9X5X9X0X1X1X9X</ns0:accountNumber>\n' +
      '                      <ns0:ECOADesignator>individual</ns0:ECOADesignator>\n' +
      '                      <ns0:dateOpened>01/25/2010</ns0:dateOpened>\n' +
      '                      <ns0:dateEffectiveLabel>DateUpdated</ns0:dateEffectiveLabel>\n' +
      '                      <ns0:dateEffective>07/27/2017</ns0:dateEffective>\n' +
      '                      <ns0:dateClosed>08/05/2015</ns0:dateClosed>\n' +
      '                      <ns0:highCredit>6730</ns0:highCredit>\n' +
      '                      <ns0:creditLimit>6500</ns0:creditLimit>\n' +
      '                      <ns0:accountRating>BK</ns0:accountRating>\n' +
      '                      <ns0:remark>\n' +
      '                         <ns0:code>BKL</ns0:code>\n' +
      '                         <ns0:type>affiliate</ns0:type>\n' +
      '                         <ns0:description>>INCLUDED IN BANKRUPTCY&lt;</ns0:description>\n' +
      '                      </ns0:remark>\n' +
      '                      <ns0:terms>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:terms>\n' +
      '                      <ns0:account>\n' +
      '                         <ns0:code>CC</ns0:code>\n' +
      '                         <ns0:description>CREDIT CARD</ns0:description>\n' +
      '                      </ns0:account>\n' +
      '                      <ns0:paymentHistory/>\n' +
      '                      <ns0:mostRecentPayment>\n' +
      '                         <ns0:date>07/23/2015</ns0:date>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:mostRecentPayment>\n' +
      '                      <ns0:additionalTradeAccount>\n' +
      '                         <ns0:original/>\n' +
      '                      </ns0:additionalTradeAccount>\n' +
      '                      <ns0:suppressionFlag>false</ns0:suppressionFlag>\n' +
      '                      <ns0:adverseFlag>true</ns0:adverseFlag>\n' +
      '                      <ns0:estimatedDeletionDate>04/2022</ns0:estimatedDeletionDate>\n' +
      '                      <ns0:accountRatingDescription>>Account Included in Bankruptcy&lt;</ns0:accountRatingDescription>\n' +
      '                      <ns0:portfolioTypeDescription>Revolving Account</ns0:portfolioTypeDescription>\n' +
      '                      <ns0:ECOADesignatorDescription>Individual Account</ns0:ECOADesignatorDescription>\n' +
      '                      <ns0:histPaymentDueList></ns0:histPaymentDueList>\n' +
      '                      <ns0:histPaymentAmtList></ns0:histPaymentAmtList>\n' +
      '                      <ns0:histBalanceList></ns0:histBalanceList>\n' +
      '                      <ns0:histPastDueList></ns0:histPastDueList>\n' +
      '                      <ns0:histRemarkList></ns0:histRemarkList>\n' +
      '                      <ns0:isCollection>false</ns0:isCollection>\n' +
      '                   </ns0:trade>\n' +
      '                   <ns0:trade>\n' +
      '                      <ns0:itemKey>6X1X0X7X0X0X5X6X_9616003_R</ns0:itemKey>\n' +
      '                      <ns0:subscriber>\n' +
      '                         <ns0:industryCode>BC</ns0:industryCode>\n' +
      '                         <ns0:memberCode>9616003</ns0:memberCode>\n' +
      '                         <ns0:name>\n' +
      '                            <ns0:unparsed>DISCOVER FINCL SVC LLC</ns0:unparsed>\n' +
      '                         </ns0:name>\n' +
      '                         <ns0:address>\n' +
      '                            <ns0:street>\n' +
      '                               <ns0:unparsed>1072 SW 101 St</ns0:unparsed>\n' +
      '                               <ns0:unparsed>Test 68</ns0:unparsed>\n' +
      '                            </ns0:street>\n' +
      '                            <ns0:location>\n' +
      '                               <ns0:unparsed>WILMINGTON, DE 19850-5316</ns0:unparsed>\n' +
      '                               <ns0:city>WILMINGTON</ns0:city>\n' +
      '                               <ns0:state>DE</ns0:state>\n' +
      '                               <ns0:zipCode>19850</ns0:zipCode>\n' +
      '                               <ns0:zipExt>5316</ns0:zipExt>\n' +
      '                            </ns0:location>\n' +
      '                         </ns0:address>\n' +
      '                         <ns0:phone>\n' +
      '                            <ns0:number>\n' +
      '                               <ns0:unparsed>(800) 347-2683</ns0:unparsed>\n' +
      '                               <ns0:areaCode>800</ns0:areaCode>\n' +
      '                               <ns0:exchange>347</ns0:exchange>\n' +
      '                               <ns0:suffix>2683</ns0:suffix>\n' +
      '                            </ns0:number>\n' +
      '                         </ns0:phone>\n' +
      '                      </ns0:subscriber>\n' +
      '                      <ns0:portfolioType>revolving</ns0:portfolioType>\n' +
      '                      <ns0:accountNumber>6X1X0X7X0X0X5X6X</ns0:accountNumber>\n' +
      '                      <ns0:ECOADesignator>individual</ns0:ECOADesignator>\n' +
      '                      <ns0:dateOpened>02/18/2011</ns0:dateOpened>\n' +
      '                      <ns0:dateEffectiveLabel>DateUpdated</ns0:dateEffectiveLabel>\n' +
      '                      <ns0:dateEffective>05/21/2017</ns0:dateEffective>\n' +
      '                      <ns0:dateClosed>04/04/2015</ns0:dateClosed>\n' +
      '                      <ns0:currentBalance>0</ns0:currentBalance>\n' +
      '                      <ns0:highCredit>3944</ns0:highCredit>\n' +
      '                      <ns0:accountRating>BK</ns0:accountRating>\n' +
      '                      <ns0:remark>\n' +
      '                         <ns0:code>BKL</ns0:code>\n' +
      '                         <ns0:type>affiliate</ns0:type>\n' +
      '                         <ns0:description>>INCLUDED IN BANKRUPTCY&lt;</ns0:description>\n' +
      '                      </ns0:remark>\n' +
      '                      <ns0:terms>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:terms>\n' +
      '                      <ns0:account>\n' +
      '                         <ns0:code>CC</ns0:code>\n' +
      '                         <ns0:description>CREDIT CARD</ns0:description>\n' +
      '                      </ns0:account>\n' +
      '                      <ns0:paymentHistory/>\n' +
      '                      <ns0:mostRecentPayment>\n' +
      '                         <ns0:date>03/22/2015</ns0:date>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:mostRecentPayment>\n' +
      '                      <ns0:additionalTradeAccount>\n' +
      '                         <ns0:original/>\n' +
      '                      </ns0:additionalTradeAccount>\n' +
      '                      <ns0:suppressionFlag>false</ns0:suppressionFlag>\n' +
      '                      <ns0:adverseFlag>true</ns0:adverseFlag>\n' +
      '                      <ns0:estimatedDeletionDate>02/2020</ns0:estimatedDeletionDate>\n' +
      '                      <ns0:accountRatingDescription>>Account Included in Bankruptcy&lt;</ns0:accountRatingDescription>\n' +
      '                      <ns0:portfolioTypeDescription>Revolving Account</ns0:portfolioTypeDescription>\n' +
      '                      <ns0:ECOADesignatorDescription>Individual Account</ns0:ECOADesignatorDescription>\n' +
      '                      <ns0:histPaymentDueList></ns0:histPaymentDueList>\n' +
      '                      <ns0:histPaymentAmtList></ns0:histPaymentAmtList>\n' +
      '                      <ns0:histBalanceList></ns0:histBalanceList>\n' +
      '                      <ns0:histPastDueList></ns0:histPastDueList>\n' +
      '                      <ns0:histRemarkList></ns0:histRemarkList>\n' +
      '                      <ns0:isCollection>false</ns0:isCollection>\n' +
      '                   </ns0:trade>\n' +
      '                   <ns0:trade>\n' +
      '                      <ns0:itemKey>4X0X0X9X8X6X7X6X_3429001_R</ns0:itemKey>\n' +
      '                      <ns0:subscriber>\n' +
      '                         <ns0:industryCode>BC</ns0:industryCode>\n' +
      '                         <ns0:memberCode>3429001</ns0:memberCode>\n' +
      '                         <ns0:name>\n' +
      '                            <ns0:unparsed>FIRST USA BANK</ns0:unparsed>\n' +
      '                         </ns0:name>\n' +
      '                         <ns0:address>\n' +
      '                            <ns0:street>\n' +
      '                               <ns0:unparsed>2500 WESTFIELD DR</ns0:unparsed>\n' +
      '                            </ns0:street>\n' +
      '                            <ns0:location>\n' +
      '                               <ns0:unparsed>ELGIN, IL 60124</ns0:unparsed>\n' +
      '                               <ns0:city>ELGIN</ns0:city>\n' +
      '                               <ns0:state>IL</ns0:state>\n' +
      '                               <ns0:zipCode>60124</ns0:zipCode>\n' +
      '                            </ns0:location>\n' +
      '                         </ns0:address>\n' +
      '                         <ns0:phone>\n' +
      '                            <ns0:number>\n' +
      '                               <ns0:unparsed>(800) 283-1211</ns0:unparsed>\n' +
      '                               <ns0:areaCode>800</ns0:areaCode>\n' +
      '                               <ns0:exchange>283</ns0:exchange>\n' +
      '                               <ns0:suffix>1211</ns0:suffix>\n' +
      '                            </ns0:number>\n' +
      '                         </ns0:phone>\n' +
      '                      </ns0:subscriber>\n' +
      '                      <ns0:portfolioType>revolving</ns0:portfolioType>\n' +
      '                      <ns0:accountNumber>4X0X0X9X8X6X7X6X</ns0:accountNumber>\n' +
      '                      <ns0:ECOADesignator>individual</ns0:ECOADesignator>\n' +
      '                      <ns0:dateOpened>10/11/2013</ns0:dateOpened>\n' +
      '                      <ns0:dateEffectiveLabel>DateUpdated</ns0:dateEffectiveLabel>\n' +
      '                      <ns0:dateEffective>07/26/2017</ns0:dateEffective>\n' +
      '                      <ns0:dateClosed>11/18/2013</ns0:dateClosed>\n' +
      '                      <ns0:highCredit>5551</ns0:highCredit>\n' +
      '                      <ns0:creditLimit>5400</ns0:creditLimit>\n' +
      '                      <ns0:accountRating>BK</ns0:accountRating>\n' +
      '                      <ns0:remark>\n' +
      '                         <ns0:code>BKL</ns0:code>\n' +
      '                         <ns0:type>affiliate</ns0:type>\n' +
      '                         <ns0:description>>INCLUDED IN BANKRUPTCY&lt;</ns0:description>\n' +
      '                      </ns0:remark>\n' +
      '                      <ns0:terms>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:terms>\n' +
      '                      <ns0:paymentHistory/>\n' +
      '                      <ns0:mostRecentPayment>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:mostRecentPayment>\n' +
      '                      <ns0:additionalTradeAccount>\n' +
      '                         <ns0:original/>\n' +
      '                      </ns0:additionalTradeAccount>\n' +
      '                      <ns0:suppressionFlag>false</ns0:suppressionFlag>\n' +
      '                      <ns0:adverseFlag>true</ns0:adverseFlag>\n' +
      '                      <ns0:estimatedDeletionDate>07/2020</ns0:estimatedDeletionDate>\n' +
      '                      <ns0:accountRatingDescription>>Account Included in Bankruptcy&lt;</ns0:accountRatingDescription>\n' +
      '                      <ns0:portfolioTypeDescription>Revolving Account</ns0:portfolioTypeDescription>\n' +
      '                      <ns0:ECOADesignatorDescription>Individual Account</ns0:ECOADesignatorDescription>\n' +
      '                      <ns0:histPaymentDueList></ns0:histPaymentDueList>\n' +
      '                      <ns0:histPaymentAmtList></ns0:histPaymentAmtList>\n' +
      '                      <ns0:histBalanceList></ns0:histBalanceList>\n' +
      '                      <ns0:histPastDueList></ns0:histPastDueList>\n' +
      '                      <ns0:histRemarkList></ns0:histRemarkList>\n' +
      '                      <ns0:isCollection>false</ns0:isCollection>\n' +
      '                   </ns0:trade>\n' +
      '                   <ns0:trade>\n' +
      '                      <ns0:itemKey>5X2X1X0X6X6X5X3X_64DB002_R</ns0:itemKey>\n' +
      '                      <ns0:subscriber>\n' +
      '                         <ns0:industryCode>BC</ns0:industryCode>\n' +
      '                         <ns0:memberCode>64DB002</ns0:memberCode>\n' +
      '                         <ns0:name>\n' +
      '                            <ns0:unparsed>ITT FIN</ns0:unparsed>\n' +
      '                         </ns0:name>\n' +
      '                         <ns0:address>\n' +
      '                            <ns0:street>\n' +
      '                               <ns0:unparsed>PO BOX 6241</ns0:unparsed>\n' +
      '                            </ns0:street>\n' +
      '                            <ns0:location>\n' +
      '                               <ns0:unparsed>SOUIX FALLS, SD 57117</ns0:unparsed>\n' +
      '                               <ns0:city>SOUIX FALLS</ns0:city>\n' +
      '                               <ns0:state>SD</ns0:state>\n' +
      '                               <ns0:zipCode>57117</ns0:zipCode>\n' +
      '                            </ns0:location>\n' +
      '                         </ns0:address>\n' +
      '                         <ns0:phone>\n' +
      '                            <ns0:number>\n' +
      '                               <ns0:unparsed>Phone number not available</ns0:unparsed>\n' +
      '                            </ns0:number>\n' +
      '                         </ns0:phone>\n' +
      '                      </ns0:subscriber>\n' +
      '                      <ns0:portfolioType>revolving</ns0:portfolioType>\n' +
      '                      <ns0:accountNumber>5X2X1X0X6X6X5X3X</ns0:accountNumber>\n' +
      '                      <ns0:ECOADesignator>individual</ns0:ECOADesignator>\n' +
      '                      <ns0:dateOpened>07/12/2005</ns0:dateOpened>\n' +
      '                      <ns0:dateEffectiveLabel>DateUpdated</ns0:dateEffectiveLabel>\n' +
      '                      <ns0:dateEffective>11/07/2011</ns0:dateEffective>\n' +
      '                      <ns0:datePaidOut>06/27/2011</ns0:datePaidOut>\n' +
      '                      <ns0:currentBalance>0</ns0:currentBalance>\n' +
      '                      <ns0:highCredit>2100</ns0:highCredit>\n' +
      '                      <ns0:creditLimit>2100</ns0:creditLimit>\n' +
      '                      <ns0:accountRating>01</ns0:accountRating>\n' +
      '                      <ns0:remark>\n' +
      '                         <ns0:code>CBC</ns0:code>\n' +
      '                         <ns0:type>compliance</ns0:type>\n' +
      '                         <ns0:description>ACCOUNT CLOSED BY CONSUMER</ns0:description>\n' +
      '                      </ns0:remark>\n' +
      '                      <ns0:terms>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:terms>\n' +
      '                      <ns0:account>\n' +
      '                         <ns0:code>CC</ns0:code>\n' +
      '                         <ns0:description>CREDIT CARD</ns0:description>\n' +
      '                      </ns0:account>\n' +
      '                      <ns0:paymentHistory>\n' +
      '                         <ns0:paymentPattern>\n' +
      '                            <ns0:startDate>10/01/2011</ns0:startDate>\n' +
      '                            <ns0:text>1111111111</ns0:text>\n' +
      '                         </ns0:paymentPattern>\n' +
      '                         <ns0:historicalCounters>\n' +
      '                            <ns0:monthsReviewedCount>10</ns0:monthsReviewedCount>\n' +
      '                            <ns0:late30DaysTotal>0</ns0:late30DaysTotal>\n' +
      '                            <ns0:late60DaysTotal>0</ns0:late60DaysTotal>\n' +
      '                            <ns0:late90DaysTotal>0</ns0:late90DaysTotal>\n' +
      '                         </ns0:historicalCounters>\n' +
      '                      </ns0:paymentHistory>\n' +
      '                      <ns0:mostRecentPayment>\n' +
      '                         <ns0:date>06/25/2011</ns0:date>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:mostRecentPayment>\n' +
      '                      <ns0:additionalTradeAccount>\n' +
      '                         <ns0:original/>\n' +
      '                      </ns0:additionalTradeAccount>\n' +
      '                      <ns0:suppressionFlag>false</ns0:suppressionFlag>\n' +
      '                      <ns0:adverseFlag>false</ns0:adverseFlag>\n' +
      '                      <ns0:accountRatingDescription>Current; Paid or Paying as Agreed</ns0:accountRatingDescription>\n' +
      '                      <ns0:portfolioTypeDescription>Revolving Account</ns0:portfolioTypeDescription>\n' +
      '                      <ns0:ECOADesignatorDescription>Individual Account</ns0:ECOADesignatorDescription>\n' +
      '                      <ns0:histPaymentDueList></ns0:histPaymentDueList>\n' +
      '                      <ns0:histPaymentAmtList></ns0:histPaymentAmtList>\n' +
      '                      <ns0:histBalanceList></ns0:histBalanceList>\n' +
      '                      <ns0:histPastDueList></ns0:histPastDueList>\n' +
      '                      <ns0:isCollection>false</ns0:isCollection>\n' +
      '                   </ns0:trade>\n' +
      '                   <ns0:trade>\n' +
      '                      <ns0:itemKey>0X5X1X0X0X8_235007R_R</ns0:itemKey>\n' +
      '                      <ns0:subscriber>\n' +
      '                         <ns0:industryCode>DZ</ns0:industryCode>\n' +
      '                         <ns0:memberCode>235007R</ns0:memberCode>\n' +
      '                         <ns0:name>\n' +
      '                            <ns0:unparsed>M.WARD/MBGA</ns0:unparsed>\n' +
      '                         </ns0:name>\n' +
      '                         <ns0:address>\n' +
      '                            <ns0:street>\n' +
      '                               <ns0:unparsed>PO BOX 29114</ns0:unparsed>\n' +
      '                            </ns0:street>\n' +
      '                            <ns0:location>\n' +
      '                               <ns0:unparsed>LENEXA, KS 66215</ns0:unparsed>\n' +
      '                               <ns0:city>LENEXA</ns0:city>\n' +
      '                               <ns0:state>KS</ns0:state>\n' +
      '                               <ns0:zipCode>66215</ns0:zipCode>\n' +
      '                            </ns0:location>\n' +
      '                         </ns0:address>\n' +
      '                         <ns0:phone>\n' +
      '                            <ns0:number>\n' +
      '                               <ns0:unparsed>Phone number not available</ns0:unparsed>\n' +
      '                            </ns0:number>\n' +
      '                         </ns0:phone>\n' +
      '                      </ns0:subscriber>\n' +
      '                      <ns0:portfolioType>revolving</ns0:portfolioType>\n' +
      '                      <ns0:accountNumber>0X5X1X0X0X8</ns0:accountNumber>\n' +
      '                      <ns0:ECOADesignator>individual</ns0:ECOADesignator>\n' +
      '                      <ns0:dateOpened>05/10/2012</ns0:dateOpened>\n' +
      '                      <ns0:dateEffectiveLabel>DateUpdated</ns0:dateEffectiveLabel>\n' +
      '                      <ns0:dateEffective>11/06/2014</ns0:dateEffective>\n' +
      '                      <ns0:currentBalance>0</ns0:currentBalance>\n' +
      '                      <ns0:highCredit>0</ns0:highCredit>\n' +
      '                      <ns0:creditLimit>1700</ns0:creditLimit>\n' +
      '                      <ns0:accountRating>01</ns0:accountRating>\n' +
      '                      <ns0:terms>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:terms>\n' +
      '                      <ns0:paymentHistory>\n' +
      '                         <ns0:paymentPattern>\n' +
      '                            <ns0:startDate>10/01/2014</ns0:startDate>\n' +
      '                            <ns0:text>111111111111XXXXXXXXXXXXXX1</ns0:text>\n' +
      '                         </ns0:paymentPattern>\n' +
      '                         <ns0:historicalCounters>\n' +
      '                            <ns0:monthsReviewedCount>27</ns0:monthsReviewedCount>\n' +
      '                            <ns0:late30DaysTotal>0</ns0:late30DaysTotal>\n' +
      '                            <ns0:late60DaysTotal>0</ns0:late60DaysTotal>\n' +
      '                            <ns0:late90DaysTotal>0</ns0:late90DaysTotal>\n' +
      '                         </ns0:historicalCounters>\n' +
      '                      </ns0:paymentHistory>\n' +
      '                      <ns0:mostRecentPayment>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:mostRecentPayment>\n' +
      '                      <ns0:additionalTradeAccount>\n' +
      '                         <ns0:original/>\n' +
      '                      </ns0:additionalTradeAccount>\n' +
      '                      <ns0:suppressionFlag>false</ns0:suppressionFlag>\n' +
      '                      <ns0:adverseFlag>false</ns0:adverseFlag>\n' +
      '                      <ns0:accountRatingDescription>Current; Paid or Paying as Agreed</ns0:accountRatingDescription>\n' +
      '                      <ns0:portfolioTypeDescription>Revolving Account</ns0:portfolioTypeDescription>\n' +
      '                      <ns0:ECOADesignatorDescription>Individual Account</ns0:ECOADesignatorDescription>\n' +
      '                      <ns0:histPaymentDueList></ns0:histPaymentDueList>\n' +
      '                      <ns0:histPaymentAmtList></ns0:histPaymentAmtList>\n' +
      '                      <ns0:histBalanceList></ns0:histBalanceList>\n' +
      '                      <ns0:histPastDueList></ns0:histPastDueList>\n' +
      '                      <ns0:histRemarkList></ns0:histRemarkList>\n' +
      '                      <ns0:isCollection>false</ns0:isCollection>\n' +
      '                   </ns0:trade>\n' +
      '                   <ns0:trade>\n' +
      '                      <ns0:itemKey>1X2X1X5X0X0X_6256385_R</ns0:itemKey>\n' +
      '                      <ns0:subscriber>\n' +
      '                         <ns0:industryCode>DC</ns0:industryCode>\n' +
      '                         <ns0:memberCode>6256385</ns0:memberCode>\n' +
      '                         <ns0:name>\n' +
      '                            <ns0:unparsed>SEARS ROEBUCK &amp; CO</ns0:unparsed>\n' +
      '                         </ns0:name>\n' +
      '                         <ns0:address>\n' +
      '                            <ns0:street>\n' +
      '                               <ns0:unparsed>13200 SMITH ROAD</ns0:unparsed>\n' +
      '                            </ns0:street>\n' +
      '                            <ns0:location>\n' +
      '                               <ns0:unparsed>CLEVELAND, OH 44130-6282</ns0:unparsed>\n' +
      '                               <ns0:city>CLEVELAND</ns0:city>\n' +
      '                               <ns0:state>OH</ns0:state>\n' +
      '                               <ns0:zipCode>44130</ns0:zipCode>\n' +
      '                               <ns0:zipExt>6282</ns0:zipExt>\n' +
      '                            </ns0:location>\n' +
      '                         </ns0:address>\n' +
      '                         <ns0:phone>\n' +
      '                            <ns0:number>\n' +
      '                               <ns0:unparsed>(800) 326-0115</ns0:unparsed>\n' +
      '                               <ns0:areaCode>800</ns0:areaCode>\n' +
      '                               <ns0:exchange>326</ns0:exchange>\n' +
      '                               <ns0:suffix>0115</ns0:suffix>\n' +
      '                            </ns0:number>\n' +
      '                         </ns0:phone>\n' +
      '                      </ns0:subscriber>\n' +
      '                      <ns0:portfolioType>revolving</ns0:portfolioType>\n' +
      '                      <ns0:accountNumber>1X2X1X5X0X0X</ns0:accountNumber>\n' +
      '                      <ns0:ECOADesignator>individual</ns0:ECOADesignator>\n' +
      '                      <ns0:dateOpened>06/17/2011</ns0:dateOpened>\n' +
      '                      <ns0:dateEffectiveLabel>DateUpdated</ns0:dateEffectiveLabel>\n' +
      '                      <ns0:dateEffective>01/14/2012</ns0:dateEffective>\n' +
      '                      <ns0:datePaidOut>10/15/2011</ns0:datePaidOut>\n' +
      '                      <ns0:currentBalance>0</ns0:currentBalance>\n' +
      '                      <ns0:highCredit>10</ns0:highCredit>\n' +
      '                      <ns0:creditLimit>2200</ns0:creditLimit>\n' +
      '                      <ns0:accountRating>01</ns0:accountRating>\n' +
      '                      <ns0:terms>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:terms>\n' +
      '                      <ns0:paymentHistory>\n' +
      '                         <ns0:paymentPattern>\n' +
      '                            <ns0:startDate>12/01/2011</ns0:startDate>\n' +
      '                            <ns0:text>1</ns0:text>\n' +
      '                         </ns0:paymentPattern>\n' +
      '                         <ns0:historicalCounters>\n' +
      '                            <ns0:monthsReviewedCount>1</ns0:monthsReviewedCount>\n' +
      '                            <ns0:late30DaysTotal>0</ns0:late30DaysTotal>\n' +
      '                            <ns0:late60DaysTotal>0</ns0:late60DaysTotal>\n' +
      '                            <ns0:late90DaysTotal>0</ns0:late90DaysTotal>\n' +
      '                         </ns0:historicalCounters>\n' +
      '                      </ns0:paymentHistory>\n' +
      '                      <ns0:mostRecentPayment>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:mostRecentPayment>\n' +
      '                      <ns0:additionalTradeAccount>\n' +
      '                         <ns0:original/>\n' +
      '                      </ns0:additionalTradeAccount>\n' +
      '                      <ns0:suppressionFlag>false</ns0:suppressionFlag>\n' +
      '                      <ns0:adverseFlag>false</ns0:adverseFlag>\n' +
      '                      <ns0:accountRatingDescription>Current; Paid or Paying as Agreed</ns0:accountRatingDescription>\n' +
      '                      <ns0:portfolioTypeDescription>Revolving Account</ns0:portfolioTypeDescription>\n' +
      '                      <ns0:ECOADesignatorDescription>Individual Account</ns0:ECOADesignatorDescription>\n' +
      '                      <ns0:histPaymentDueList></ns0:histPaymentDueList>\n' +
      '                      <ns0:histPaymentAmtList></ns0:histPaymentAmtList>\n' +
      '                      <ns0:histBalanceList></ns0:histBalanceList>\n' +
      '                      <ns0:histPastDueList></ns0:histPastDueList>\n' +
      '                      <ns0:histRemarkList></ns0:histRemarkList>\n' +
      '                      <ns0:isCollection>false</ns0:isCollection>\n' +
      '                   </ns0:trade>\n' +
      '                   <ns0:trade>\n' +
      '                      <ns0:itemKey>5X7X6X2X6X0X_930N133_R</ns0:itemKey>\n' +
      '                      <ns0:subscriber>\n' +
      '                         <ns0:industryCode>FF</ns0:industryCode>\n' +
      '                         <ns0:memberCode>930N133</ns0:memberCode>\n' +
      '                         <ns0:name>\n' +
      '                            <ns0:unparsed>TRANSAMERICA BANK</ns0:unparsed>\n' +
      '                         </ns0:name>\n' +
      '                         <ns0:address>\n' +
      '                            <ns0:street>\n' +
      '                               <ns0:unparsed>POB 130</ns0:unparsed>\n' +
      '                            </ns0:street>\n' +
      '                            <ns0:location>\n' +
      '                               <ns0:unparsed>CRYSTAL LAKE, IL 60139</ns0:unparsed>\n' +
      '                               <ns0:city>CRYSTAL LAKE</ns0:city>\n' +
      '                               <ns0:state>IL</ns0:state>\n' +
      '                               <ns0:zipCode>60139</ns0:zipCode>\n' +
      '                            </ns0:location>\n' +
      '                         </ns0:address>\n' +
      '                         <ns0:phone>\n' +
      '                            <ns0:number>\n' +
      '                               <ns0:unparsed>Phone number not available</ns0:unparsed>\n' +
      '                            </ns0:number>\n' +
      '                         </ns0:phone>\n' +
      '                      </ns0:subscriber>\n' +
      '                      <ns0:portfolioType>revolving</ns0:portfolioType>\n' +
      '                      <ns0:accountNumber>5X7X6X2X6X0X</ns0:accountNumber>\n' +
      '                      <ns0:ECOADesignator>individual</ns0:ECOADesignator>\n' +
      '                      <ns0:dateOpened>03/03/2012</ns0:dateOpened>\n' +
      '                      <ns0:dateEffectiveLabel>DateUpdated</ns0:dateEffectiveLabel>\n' +
      '                      <ns0:dateEffective>01/13/2017</ns0:dateEffective>\n' +
      '                      <ns0:dateClosed>08/03/2015</ns0:dateClosed>\n' +
      '                      <ns0:highCredit>1056</ns0:highCredit>\n' +
      '                      <ns0:creditLimit>3500</ns0:creditLimit>\n' +
      '                      <ns0:accountRating>BK</ns0:accountRating>\n' +
      '                      <ns0:remark>\n' +
      '                         <ns0:code>BKL</ns0:code>\n' +
      '                         <ns0:type>affiliate</ns0:type>\n' +
      '                         <ns0:description>>INCLUDED IN BANKRUPTCY&lt;</ns0:description>\n' +
      '                      </ns0:remark>\n' +
      '                      <ns0:terms>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:terms>\n' +
      '                      <ns0:account>\n' +
      '                         <ns0:code>CH</ns0:code>\n' +
      '                         <ns0:description>CHARGE ACCOUNT</ns0:description>\n' +
      '                      </ns0:account>\n' +
      '                      <ns0:paymentHistory/>\n' +
      '                      <ns0:mostRecentPayment>\n' +
      '                         <ns0:date>12/11/2016</ns0:date>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:mostRecentPayment>\n' +
      '                      <ns0:additionalTradeAccount>\n' +
      '                         <ns0:original/>\n' +
      '                      </ns0:additionalTradeAccount>\n' +
      '                      <ns0:suppressionFlag>false</ns0:suppressionFlag>\n' +
      '                      <ns0:adverseFlag>true</ns0:adverseFlag>\n' +
      '                      <ns0:estimatedDeletionDate>06/2022</ns0:estimatedDeletionDate>\n' +
      '                      <ns0:accountRatingDescription>>Account Included in Bankruptcy&lt;</ns0:accountRatingDescription>\n' +
      '                      <ns0:portfolioTypeDescription>Revolving Account</ns0:portfolioTypeDescription>\n' +
      '                      <ns0:ECOADesignatorDescription>Individual Account</ns0:ECOADesignatorDescription>\n' +
      '                      <ns0:histPaymentDueList></ns0:histPaymentDueList>\n' +
      '                      <ns0:histPaymentAmtList></ns0:histPaymentAmtList>\n' +
      '                      <ns0:histBalanceList></ns0:histBalanceList>\n' +
      '                      <ns0:histPastDueList></ns0:histPastDueList>\n' +
      '                      <ns0:histRemarkList></ns0:histRemarkList>\n' +
      '                      <ns0:isCollection>false</ns0:isCollection>\n' +
      '                   </ns0:trade>\n' +
      '                   <ns0:trade>\n' +
      '                      <ns0:itemKey>4X1X1X0X1X2X2X7X_3763001_R</ns0:itemKey>\n' +
      '                      <ns0:subscriber>\n' +
      '                         <ns0:industryCode>BC</ns0:industryCode>\n' +
      '                         <ns0:memberCode>3763001</ns0:memberCode>\n' +
      '                         <ns0:name>\n' +
      '                            <ns0:unparsed>WACHOVIA-BANKCARD</ns0:unparsed>\n' +
      '                         </ns0:name>\n' +
      '                         <ns0:address>\n' +
      '                            <ns0:street>\n' +
      '                               <ns0:unparsed>PO BOX 3117</ns0:unparsed>\n' +
      '                            </ns0:street>\n' +
      '                            <ns0:location>\n' +
      '                               <ns0:unparsed>WINSTON-SALEM, NC 27102</ns0:unparsed>\n' +
      '                               <ns0:city>WINSTON-SALEM</ns0:city>\n' +
      '                               <ns0:state>NC</ns0:state>\n' +
      '                               <ns0:zipCode>27102</ns0:zipCode>\n' +
      '                            </ns0:location>\n' +
      '                         </ns0:address>\n' +
      '                         <ns0:phone>\n' +
      '                            <ns0:number>\n' +
      '                               <ns0:unparsed>Phone number not available</ns0:unparsed>\n' +
      '                            </ns0:number>\n' +
      '                         </ns0:phone>\n' +
      '                      </ns0:subscriber>\n' +
      '                      <ns0:portfolioType>revolving</ns0:portfolioType>\n' +
      '                      <ns0:accountNumber>4X1X1X0X1X2X2X7X</ns0:accountNumber>\n' +
      '                      <ns0:ECOADesignator>individual</ns0:ECOADesignator>\n' +
      '                      <ns0:dateOpened>10/10/2013</ns0:dateOpened>\n' +
      '                      <ns0:dateEffectiveLabel>DateUpdated</ns0:dateEffectiveLabel>\n' +
      '                      <ns0:dateEffective>09/19/2017</ns0:dateEffective>\n' +
      '                      <ns0:dateClosed>08/02/2015</ns0:dateClosed>\n' +
      '                      <ns0:highCredit>0</ns0:highCredit>\n' +
      '                      <ns0:accountRating>BK</ns0:accountRating>\n' +
      '                      <ns0:remark>\n' +
      '                         <ns0:code>CBL</ns0:code>\n' +
      '                         <ns0:type>affiliate</ns0:type>\n' +
      '                         <ns0:description>>CHAPTER 7 BANKRUPTCY&lt;</ns0:description>\n' +
      '                      </ns0:remark>\n' +
      '                      <ns0:terms>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:terms>\n' +
      '                      <ns0:account>\n' +
      '                         <ns0:code>CC</ns0:code>\n' +
      '                         <ns0:description>CREDIT CARD</ns0:description>\n' +
      '                      </ns0:account>\n' +
      '                      <ns0:paymentHistory/>\n' +
      '                      <ns0:mostRecentPayment>\n' +
      '                         <ns0:date>07/20/2015</ns0:date>\n' +
      '                         <ns0:description></ns0:description>\n' +
      '                      </ns0:mostRecentPayment>\n' +
      '                      <ns0:additionalTradeAccount>\n' +
      '                         <ns0:original/>\n' +
      '                      </ns0:additionalTradeAccount>\n' +
      '                      <ns0:suppressionFlag>false</ns0:suppressionFlag>\n' +
      '                      <ns0:adverseFlag>true</ns0:adverseFlag>\n' +
      '                      <ns0:estimatedDeletionDate>10/2022</ns0:estimatedDeletionDate>\n' +
      '                      <ns0:accountRatingDescription>>Account Included in Bankruptcy&lt;</ns0:accountRatingDescription>\n' +
      '                      <ns0:portfolioTypeDescription>Revolving Account</ns0:portfolioTypeDescription>\n' +
      '                      <ns0:ECOADesignatorDescription>Individual Account</ns0:ECOADesignatorDescription>\n' +
      '                      <ns0:histPaymentDueList></ns0:histPaymentDueList>\n' +
      '                      <ns0:histPaymentAmtList></ns0:histPaymentAmtList>\n' +
      '                      <ns0:histBalanceList></ns0:histBalanceList>\n' +
      '                      <ns0:histPastDueList></ns0:histPastDueList>\n' +
      '                      <ns0:histRemarkList></ns0:histRemarkList>\n' +
      '                      <ns0:isCollection>false</ns0:isCollection>\n' +
      '                   </ns0:trade>\n' +
      '                   <ns0:publicRecord>\n' +
      '                      <ns0:itemKey>9X4X6X3_4871356_7X</ns0:itemKey>\n' +
      '                      <ns0:type>7X</ns0:type>\n' +
      '                      <ns0:subscriber>\n' +
      '                         <ns0:industryCode>ZP</ns0:industryCode>\n' +
      '                         <ns0:memberCode>4871356</ns0:memberCode>\n' +
      '                         <ns0:subscriberType>reporting</ns0:subscriberType>\n' +
      '                         <ns0:name>\n' +
      '                            <ns0:unparsed>MINNESOTA FEDERAL COURT-</ns0:unparsed>\n' +
      '                         </ns0:name>\n' +
      '                         <ns0:address>\n' +
      '                            <ns0:street>\n' +
      '                               <ns0:unparsed>300 S 4TH STREET</ns0:unparsed>\n' +
      '                            </ns0:street>\n' +
      '                            <ns0:location>\n' +
      '                               <ns0:unparsed>MINNEAPOLIS, MN 55415</ns0:unparsed>\n' +
      '                               <ns0:city>MINNEAPOLIS</ns0:city>\n' +
      '                               <ns0:state>MN</ns0:state>\n' +
      '                               <ns0:zipCode>55415</ns0:zipCode>\n' +
      '                            </ns0:location>\n' +
      '                         </ns0:address>\n' +
      '                         <ns0:phone>\n' +
      '                            <ns0:number>\n' +
      '                               <ns0:unparsed>(612) 664-5200</ns0:unparsed>\n' +
      '                               <ns0:areaCode>612</ns0:areaCode>\n' +
      '                               <ns0:exchange>664</ns0:exchange>\n' +
      '                               <ns0:suffix>5200</ns0:suffix>\n' +
      '                            </ns0:number>\n' +
      '                         </ns0:phone>\n' +
      '                      </ns0:subscriber>\n' +
      '                      <ns0:docketNumber>9X4X6X3</ns0:docketNumber>\n' +
      '                      <ns0:attorney>JACK L PRESCOTT</ns0:attorney>\n' +
      '                      <ns0:plaintiff></ns0:plaintiff>\n' +
      '                      <ns0:dateEffective>10/13/2015</ns0:dateEffective>\n' +
      '                      <ns0:dateFiled>10/13/2015</ns0:dateFiled>\n' +
      '                      <ns0:datePaid>01/25/2016</ns0:datePaid>\n' +
      '                      <ns0:ECOADesignator>individual</ns0:ECOADesignator>\n' +
      '                      <ns0:source>\n' +
      '                         <ns0:code>FE</ns0:code>\n' +
      '                         <ns0:description>Federal District</ns0:description>\n' +
      '                      </ns0:source>\n' +
      '                      <ns0:estimatedDateOfDeletion>09/2025</ns0:estimatedDateOfDeletion>\n' +
      '                      <ns0:suppressionIndicator>false</ns0:suppressionIndicator>\n' +
      '                      <ns0:publicRecordTypeDescription>CHAPTER 7 BANKRUPTCY DISCHARGED</ns0:publicRecordTypeDescription>\n' +
      '                      <ns0:ECOADescription>Individual Debt</ns0:ECOADescription>\n' +
      '                      <ns0:dateEffectiveLabel>DateUpdated</ns0:dateEffectiveLabel>\n' +
      '                      <ns0:order>1</ns0:order>\n' +
      '                   </ns0:publicRecord>\n' +
      '                   <ns0:histRemarkLegend></ns0:histRemarkLegend>\n' +
      '                </ns0:credit>\n' +
      '             </ns0:custom>\n' +
      '             <ns0:addOnProduct>\n' +
      '                <ns0:scoreModel>\n' +
      '                   <ns0:score>\n' +
      '                      <ns0:name>\n' +
      '                         <ns0:person>\n' +
      '                            <ns0:unparsed>DORA G. JULIEN</ns0:unparsed>\n' +
      '                            <ns0:first>DORA</ns0:first>\n' +
      '                            <ns0:middle>G</ns0:middle>\n' +
      '                            <ns0:last>JULIEN</ns0:last>\n' +
      '                            <ns0:order>1</ns0:order>\n' +
      '                         </ns0:person>\n' +
      '                      </ns0:name>\n' +
      '                      <ns0:productCode>00W40</ns0:productCode>\n' +
      '                      <ns0:score>11</ns0:score>\n' +
      '                      <ns0:scoreGrade>-</ns0:scoreGrade>\n' +
      '                      <ns0:scoreDate>03/09/2018</ns0:scoreDate>\n' +
      '                      <ns0:quantitativeGraphNumber>-1</ns0:quantitativeGraphNumber>\n' +
      '                      <ns0:populationGraphNumber>50</ns0:populationGraphNumber>\n' +
      "                      <ns0:populationDescription>Your credit ranks higher than --% of the nation's population.</ns0:populationDescription>\n" +
      '                      <ns0:summaryDescription>You did not order a TransUnion credit score. You can purchase your credit score for $9.95 by calling 1-866-SCORE-TU or 1-866-726-7388.</ns0:summaryDescription>\n' +
      '                   </ns0:score>\n' +
      '                </ns0:scoreModel>\n' +
      '                <ns0:militaryLendingActSearch ns0:searchStatus="noMatch"/>\n' +
      '             </ns0:addOnProduct>\n' +
      '             <ns0:closingInfo>\n' +
      '                <ns0:mail>\n' +
      '                   <ns0:unparsed>TransUnion Consumer Relations</ns0:unparsed>\n' +
      '                </ns0:mail>\n' +
      '                <ns0:address>\n' +
      '                   <ns0:street>\n' +
      '                      <ns0:unparsed>P.O. Box 2000</ns0:unparsed>\n' +
      '                   </ns0:street>\n' +
      '                   <ns0:location>\n' +
      '                      <ns0:unparsed>Chester, PA 19016-2000</ns0:unparsed>\n' +
      '                   </ns0:location>\n' +
      '                   <ns0:order>1</ns0:order>\n' +
      '                </ns0:address>\n' +
      '                <ns0:phone>\n' +
      '                   <ns0:number>\n' +
      '                      <ns0:unparsed>(800) 916-8800</ns0:unparsed>\n' +
      '                   </ns0:number>\n' +
      '                </ns0:phone>\n' +
      '                <ns0:contactURL>www.transunion.com</ns0:contactURL>\n' +
      '                <ns0:disputeURL>www.transunion.com/disputeonline</ns0:disputeURL>\n' +
      '             </ns0:closingInfo>\n' +
      '             <ns0:fileNumber>300010987</ns0:fileNumber>\n' +
      '             <ns0:consumerID>1078425505</ns0:consumerID>\n' +
      '             <ns0:fileDate>03/09/2018</ns0:fileDate>\n' +
      '             <ns0:dynamicText>\n' +
      '                <ns0:personalInfoDetail>\n' +
      '                   <ns0:type>1</ns0:type>\n' +
      '                   <ns0:text>Your SSN has been masked for your protection.</ns0:text>\n' +
      '                </ns0:personalInfoDetail>\n' +
      '                <ns0:publicRecordDetail>\n' +
      '                   <ns0:type>2</ns0:type>\n' +
      '                   <ns0:text>You may be required to explain these items to potential creditors. Generally, this information was collected from public record sources by TransUnion or a company we hired to collect such information. If you submit a dispute of the accuracy of a public record item, TransUnion may update the item based on the information you provide, or we may investigate your dispute by checking with the public record source or by asking our vendor to verify that the current status of the public record is reported accurately.</ns0:text>\n' +
      '                </ns0:publicRecordDetail>\n' +
      '                <ns0:publicRecordDetail>\n' +
      '                   <ns0:type>2</ns0:type>\n' +
      '                   <ns0:text>Discharged Chapter 7 bankruptcy remains on your file for up to 10 years.</ns0:text>\n' +
      '                </ns0:publicRecordDetail>\n' +
      '                <ns0:adverseAcctDetail>\n' +
      '                   <ns0:type>2</ns0:type>\n' +
      '                   <ns0:text>Adverse information typically remains on your credit file for up to 7 years from the date of the delinquency. To help you understand what is generally considered adverse, we have added >brackets&lt; to those items in this report.</ns0:text>\n' +
      '                </ns0:adverseAcctDetail>\n' +
      '                <ns0:adverseAcctDetail>\n' +
      '                   <ns0:type>1</ns0:type>\n' +
      '                   <ns0:text>For your protection, your account numbers have been partially masked, and in some cases scrambled.</ns0:text>\n' +
      '                </ns0:adverseAcctDetail>\n' +
      '                <ns0:accountDetail>\n' +
      '                   <ns0:type>2</ns0:type>\n' +
      '                   <ns0:text></ns0:text>\n' +
      '                </ns0:accountDetail>\n' +
      '                <ns0:accountDetail>\n' +
      '                   <ns0:text>The following accounts are reported with no adverse information. For your protection, your account numbers have been partially masked, and in some cases scrambled.</ns0:text>\n' +
      '                </ns0:accountDetail>\n' +
      '                <ns0:accountDetail>\n' +
      '                   <ns0:text>Please note: Accounts are reported as &quot;Current; Paid or paying as agreed&quot; if paid within 30 days of the due date. Accounts reported as Current may still incur late fees or interest charges if not paid on or before the due date.</ns0:text>\n' +
      '                </ns0:accountDetail>\n' +
      '             </ns0:dynamicText>\n' +
      '          </ns0:subjectRecord>\n' +
      '          <ns0:fullDisclFlag>N</ns0:fullDisclFlag>\n' +
      '       </ns0:subject>\n' +
      '    </ns0:product>\n' +
      ' </ns0:productArray>\n' +
      '</ns0:creditBureau>',
    InvestigationResults: '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<trueLinkCreditReportType xmlns:ns0="com/truelink/ds/sch/report/truelink/v4_1" FraudIndicator="false" DeceasedIndicator="false">\n' +
      ' <ns0:SB168Frozen equifax="false" experian="false" transunion="false"/>\n' +
      ' <ns0:Borrower SocialSecurityNumber="471-86-6871">\n' +
      '    <ns0:BorrowerAddress dateReported="2015-09-02-07:00" addressOrder="0" partitionSet="0">\n' +
      '       <ns0:CreditAddress city="BRAHAM" stateCode="MN" unparsedStreet="PO BOX 384" postalCode="550060384"/>\n' +
      '       <ns0:Dwelling abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:Origin abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:Ownership abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:Source>\n' +
      '          <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '          <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '          <ns0:Reference></ns0:Reference>\n' +
      '       </ns0:Source>\n' +
      '    </ns0:BorrowerAddress>\n' +
      '    <ns0:CreditScore riskScore="11" scoreName="VantageScore3">\n' +
      '       <ns0:CreditScoreModel abbreviation="" description="" symbol="00W40" rank="100000"/>\n' +
      '       <ns0:NoScoreReason abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:Source>\n' +
      '          <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '          <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '          <ns0:Reference></ns0:Reference>\n' +
      '       </ns0:Source>\n' +
      '    </ns0:CreditScore>\n' +
      '    <ns0:BorrowerName partitionSet="0">\n' +
      '       <ns0:Name first="DORA" middle="G" last="JULIEN"/>\n' +
      '       <ns0:NameType abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:Source>\n' +
      '          <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '          <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '          <ns0:Reference></ns0:Reference>\n' +
      '       </ns0:Source>\n' +
      '    </ns0:BorrowerName>\n' +
      '    <ns0:SocialPartition>\n' +
      '       <ns0:Social>\n' +
      '          <ns0:SocialSecurityNumber>471-86-6871</ns0:SocialSecurityNumber>\n' +
      '          <ns0:Source>\n' +
      '             <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '             <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '             <ns0:Reference></ns0:Reference>\n' +
      '          </ns0:Source>\n' +
      '       </ns0:Social>\n' +
      '    </ns0:SocialPartition>\n' +
      ' </ns0:Borrower>\n' +
      ' <ns0:TradeLinePartition accountTypeDescription="Revolving Account" accountTypeSymbol="R" accountTypeAbbreviation="Revolving">\n' +
      '    <ns0:Tradeline accountNumber="4X2X7X1X9X2X5X6X" creditorName="CARD PRODUCTS" currentBalance="0" dateAccountStatus="2015-09-26-07:00" dateClosed="2015-09-26-07:00" dateOpened="2013-06-16-07:00" highBalance="4930" subscriberCode="927P029" position="0" bureau="TransUnion" handle="TR01_156313180_532784485_82">\n' +
      '       <ns0:AccountCondition abbreviation="Derog" description="Derogatory" symbol="F" rank="20"/>\n' +
      '       <ns0:AccountDesignator abbreviation="Individual" description="Individual" symbol="I" rank="199"/>\n' +
      '       <ns0:DisputeFlag abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:IndustryCode abbreviation="Bank Collection" description="Bank Collection" symbol="BY" rank="199"/>\n' +
      '       <ns0:OpenClosed abbreviation="Open" description="Open" symbol="O" rank="199"/>\n' +
      '       <ns0:PayStatus abbreviation="Unk" description="Unknown" symbol="U" rank="10000"/>\n' +
      '       <ns0:VerificationIndicator abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:Remark customRemark="">\n' +
      '          <ns0:RemarkCode abbreviation="Included in bankruptcy" description="Included in bankruptcy" symbol="T00BKL" rank="199"/>\n' +
      '       </ns0:Remark>\n' +
      '       <ns0:GrantedTrade amountPastDue="0" collateral="" dateLastPayment="2015-05-31-07:00" late30Count="0" late60Count="0" late90Count="0" monthlyPayment="0" monthsReviewed="0" termMonths="0" worstPatStatusCount="0">\n' +
      '          <ns0:AccountType abbreviation="Credit Card" description="Credit Card" symbol="CC" rank="50"/>\n' +
      '          <ns0:CreditType abbreviation="Revolving" description="Revolving Account" symbol="R" rank="50"/>\n' +
      '          <ns0:PaymentFrequency abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:TermType abbreviation="Provided" description="Provided" symbol="P" rank="199"/>\n' +
      '          <ns0:WorstPayStatus abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:PayStatusHistory/>\n' +
      '          <ns0:CreditLimit>0</ns0:CreditLimit>\n' +
      '       </ns0:GrantedTrade>\n' +
      '       <ns0:Source>\n' +
      '          <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '          <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '          <ns0:Reference></ns0:Reference>\n' +
      '       </ns0:Source>\n' +
      '    </ns0:Tradeline>\n' +
      ' </ns0:TradeLinePartition>\n' +
      ' <ns0:TradeLinePartition accountTypeDescription="Revolving Account" accountTypeSymbol="R" accountTypeAbbreviation="Revolving">\n' +
      '    <ns0:Tradeline accountNumber="4X2X1X0X2X0X5X0X" creditorName="CHASE NA" currentBalance="0" dateAccountStatus="2015-10-13-07:00" dateClosed="2015-08-01-07:00" dateOpened="2013-02-08-08:00" highBalance="4666" subscriberCode="402D013" position="1" bureau="TransUnion" handle="TR01_206301426_327999940_82">\n' +
      '       <ns0:AccountCondition abbreviation="Derog" description="Derogatory" symbol="F" rank="20"/>\n' +
      '       <ns0:AccountDesignator abbreviation="Individual" description="Individual" symbol="I" rank="199"/>\n' +
      '       <ns0:DisputeFlag abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:IndustryCode abbreviation="Bank Credit Cards" description="Bank Credit Cards" symbol="BC" rank="199"/>\n' +
      '       <ns0:OpenClosed abbreviation="Open" description="Open" symbol="O" rank="199"/>\n' +
      '       <ns0:PayStatus abbreviation="Unk" description="Unknown" symbol="U" rank="10000"/>\n' +
      '       <ns0:VerificationIndicator abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:Remark customRemark="">\n' +
      '          <ns0:RemarkCode abbreviation="Chapter 7 bankruptcy" description="Chapter 7 bankruptcy" symbol="T00CBL" rank="199"/>\n' +
      '       </ns0:Remark>\n' +
      '       <ns0:GrantedTrade amountPastDue="0" collateral="" dateLastPayment="2015-07-19-07:00" late30Count="0" late60Count="0" late90Count="0" monthlyPayment="0" monthsReviewed="0" termMonths="0" worstPatStatusCount="0">\n' +
      '          <ns0:AccountType abbreviation="Unknown" description="Unknown" symbol="" rank="199"/>\n' +
      '          <ns0:CreditType abbreviation="Revolving" description="Revolving Account" symbol="R" rank="50"/>\n' +
      '          <ns0:PaymentFrequency abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:TermType abbreviation="Provided" description="Provided" symbol="P" rank="199"/>\n' +
      '          <ns0:WorstPayStatus abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:PayStatusHistory/>\n' +
      '          <ns0:CreditLimit>4600</ns0:CreditLimit>\n' +
      '       </ns0:GrantedTrade>\n' +
      '       <ns0:Source>\n' +
      '          <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '          <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '          <ns0:Reference></ns0:Reference>\n' +
      '       </ns0:Source>\n' +
      '    </ns0:Tradeline>\n' +
      ' </ns0:TradeLinePartition>\n' +
      ' <ns0:TradeLinePartition accountTypeDescription="Revolving Account" accountTypeSymbol="R" accountTypeAbbreviation="Revolving">\n' +
      '    <ns0:Tradeline accountNumber="5X9X5X9X0X1X1X9X" creditorName="CITIBANK UCS" currentBalance="0" dateAccountStatus="2015-08-05-07:00" dateClosed="2015-08-05-07:00" dateOpened="2010-01-25-08:00" highBalance="6730" subscriberCode="8194006" position="2" bureau="TransUnion" handle="TR01_37390393_-382335518_82">\n' +
      '       <ns0:AccountCondition abbreviation="Derog" description="Derogatory" symbol="F" rank="20"/>\n' +
      '       <ns0:AccountDesignator abbreviation="Individual" description="Individual" symbol="I" rank="199"/>\n' +
      '       <ns0:DisputeFlag abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:IndustryCode abbreviation="Bank Credit Cards" description="Bank Credit Cards" symbol="BC" rank="199"/>\n' +
      '       <ns0:OpenClosed abbreviation="Open" description="Open" symbol="O" rank="199"/>\n' +
      '       <ns0:PayStatus abbreviation="Unk" description="Unknown" symbol="U" rank="10000"/>\n' +
      '       <ns0:VerificationIndicator abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:Remark customRemark="">\n' +
      '          <ns0:RemarkCode abbreviation="Included in bankruptcy" description="Included in bankruptcy" symbol="T00BKL" rank="199"/>\n' +
      '       </ns0:Remark>\n' +
      '       <ns0:GrantedTrade amountPastDue="0" collateral="" dateLastPayment="2015-07-23-07:00" late30Count="0" late60Count="0" late90Count="0" monthlyPayment="0" monthsReviewed="0" termMonths="0" worstPatStatusCount="0">\n' +
      '          <ns0:AccountType abbreviation="Credit Card" description="Credit Card" symbol="CC" rank="50"/>\n' +
      '          <ns0:CreditType abbreviation="Revolving" description="Revolving Account" symbol="R" rank="50"/>\n' +
      '          <ns0:PaymentFrequency abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:TermType abbreviation="Provided" description="Provided" symbol="P" rank="199"/>\n' +
      '          <ns0:WorstPayStatus abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:PayStatusHistory/>\n' +
      '          <ns0:CreditLimit>6500</ns0:CreditLimit>\n' +
      '       </ns0:GrantedTrade>\n' +
      '       <ns0:Source>\n' +
      '          <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '          <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '          <ns0:Reference></ns0:Reference>\n' +
      '       </ns0:Source>\n' +
      '    </ns0:Tradeline>\n' +
      ' </ns0:TradeLinePartition>\n' +
      ' <ns0:TradeLinePartition accountTypeDescription="Revolving Account" accountTypeSymbol="R" accountTypeAbbreviation="Revolving">\n' +
      '    <ns0:Tradeline accountNumber="6X1X0X7X0X0X5X6X" creditorName="DISCOVER FINCL SVC LLC" currentBalance="0" dateAccountStatus="2015-04-04-07:00" dateClosed="2015-04-04-07:00" dateOpened="2011-02-18-08:00" highBalance="3944" subscriberCode="9616003" position="3" bureau="TransUnion" handle="TR01_-1004538745_640985329_82">\n' +
      '       <ns0:AccountCondition abbreviation="Derog" description="Derogatory" symbol="F" rank="20"/>\n' +
      '       <ns0:AccountDesignator abbreviation="Individual" description="Individual" symbol="I" rank="199"/>\n' +
      '       <ns0:DisputeFlag abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:IndustryCode abbreviation="Bank Credit Cards" description="Bank Credit Cards" symbol="BC" rank="199"/>\n' +
      '       <ns0:OpenClosed abbreviation="Open" description="Open" symbol="O" rank="199"/>\n' +
      '       <ns0:PayStatus abbreviation="Unk" description="Unknown" symbol="U" rank="10000"/>\n' +
      '       <ns0:VerificationIndicator abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:Remark customRemark="">\n' +
      '          <ns0:RemarkCode abbreviation="Included in bankruptcy" description="Included in bankruptcy" symbol="T00BKL" rank="199"/>\n' +
      '       </ns0:Remark>\n' +
      '       <ns0:GrantedTrade amountPastDue="0" collateral="" dateLastPayment="2015-03-22-07:00" late30Count="0" late60Count="0" late90Count="0" monthlyPayment="0" monthsReviewed="0" termMonths="0" worstPatStatusCount="0">\n' +
      '          <ns0:AccountType abbreviation="Credit Card" description="Credit Card" symbol="CC" rank="50"/>\n' +
      '          <ns0:CreditType abbreviation="Revolving" description="Revolving Account" symbol="R" rank="50"/>\n' +
      '          <ns0:PaymentFrequency abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:TermType abbreviation="Provided" description="Provided" symbol="P" rank="199"/>\n' +
      '          <ns0:WorstPayStatus abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:PayStatusHistory/>\n' +
      '          <ns0:CreditLimit>0</ns0:CreditLimit>\n' +
      '       </ns0:GrantedTrade>\n' +
      '       <ns0:Source>\n' +
      '          <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '          <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '          <ns0:Reference></ns0:Reference>\n' +
      '       </ns0:Source>\n' +
      '    </ns0:Tradeline>\n' +
      ' </ns0:TradeLinePartition>\n' +
      ' <ns0:TradeLinePartition accountTypeDescription="Revolving Account" accountTypeSymbol="R" accountTypeAbbreviation="Revolving">\n' +
      '    <ns0:Tradeline accountNumber="4X0X0X9X8X6X7X6X" creditorName="FIRST USA BANK" currentBalance="0" dateAccountStatus="2013-11-18-08:00" dateClosed="2013-11-18-08:00" dateOpened="2013-10-11-07:00" highBalance="5551" subscriberCode="3429001" position="4" bureau="TransUnion" handle="TR01_1358476504_-445314871_82">\n' +
      '       <ns0:AccountCondition abbreviation="Derog" description="Derogatory" symbol="F" rank="20"/>\n' +
      '       <ns0:AccountDesignator abbreviation="Individual" description="Individual" symbol="I" rank="199"/>\n' +
      '       <ns0:DisputeFlag abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:IndustryCode abbreviation="Bank Credit Cards" description="Bank Credit Cards" symbol="BC" rank="199"/>\n' +
      '       <ns0:OpenClosed abbreviation="Open" description="Open" symbol="O" rank="199"/>\n' +
      '       <ns0:PayStatus abbreviation="Unk" description="Unknown" symbol="U" rank="10000"/>\n' +
      '       <ns0:VerificationIndicator abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:Remark customRemark="">\n' +
      '          <ns0:RemarkCode abbreviation="Included in bankruptcy" description="Included in bankruptcy" symbol="T00BKL" rank="199"/>\n' +
      '       </ns0:Remark>\n' +
      '       <ns0:GrantedTrade amountPastDue="0" collateral="" late30Count="0" late60Count="0" late90Count="0" monthlyPayment="0" monthsReviewed="0" termMonths="0" worstPatStatusCount="0">\n' +
      '          <ns0:AccountType abbreviation="Unknown" description="Unknown" symbol="" rank="199"/>\n' +
      '          <ns0:CreditType abbreviation="Revolving" description="Revolving Account" symbol="R" rank="50"/>\n' +
      '          <ns0:PaymentFrequency abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:TermType abbreviation="Provided" description="Provided" symbol="P" rank="199"/>\n' +
      '          <ns0:WorstPayStatus abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:PayStatusHistory/>\n' +
      '          <ns0:CreditLimit>5400</ns0:CreditLimit>\n' +
      '       </ns0:GrantedTrade>\n' +
      '       <ns0:Source>\n' +
      '          <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '          <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '          <ns0:Reference></ns0:Reference>\n' +
      '       </ns0:Source>\n' +
      '    </ns0:Tradeline>\n' +
      ' </ns0:TradeLinePartition>\n' +
      ' <ns0:TradeLinePartition accountTypeDescription="Revolving Account" accountTypeSymbol="R" accountTypeAbbreviation="Revolving">\n' +
      '    <ns0:Tradeline accountNumber="5X2X1X0X6X6X5X3X" creditorName="ITT FIN" currentBalance="0" dateAccountStatus="2011-06-27-07:00" dateOpened="2005-07-12-07:00" highBalance="2100" subscriberCode="64DB002" position="5" bureau="TransUnion" handle="TR01_-1751151004_-2060879626_82">\n' +
      '       <ns0:AccountCondition abbreviation="Closed" description="Closed" symbol="C" rank="50"/>\n' +
      '       <ns0:AccountDesignator abbreviation="Individual" description="Individual" symbol="I" rank="199"/>\n' +
      '       <ns0:DisputeFlag abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:IndustryCode abbreviation="Bank Credit Cards" description="Bank Credit Cards" symbol="BC" rank="199"/>\n' +
      '       <ns0:OpenClosed abbreviation="Closed" description="Closed" symbol="C" rank="198"/>\n' +
      '       <ns0:PayStatus abbreviation="Current" description="Current" symbol="C" rank="110"/>\n' +
      '       <ns0:VerificationIndicator abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:Remark customRemark="">\n' +
      '          <ns0:RemarkCode abbreviation="Account closed by consumer" description="Account closed by consumer" symbol="T00CBC" rank="199"/>\n' +
      '       </ns0:Remark>\n' +
      '       <ns0:GrantedTrade amountPastDue="0" collateral="" dateLastPayment="2011-06-25-07:00" late30Count="0" late60Count="0" late90Count="0" monthlyPayment="0" monthsReviewed="10" termMonths="0" worstPatStatusCount="10">\n' +
      '          <ns0:AccountType abbreviation="Credit Card" description="Credit Card" symbol="CC" rank="50"/>\n' +
      '          <ns0:CreditType abbreviation="Revolving" description="Revolving Account" symbol="R" rank="50"/>\n' +
      '          <ns0:PaymentFrequency abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:TermType abbreviation="Provided" description="Provided" symbol="P" rank="199"/>\n' +
      '          <ns0:WorstPayStatus abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:PayStatusHistory status="" startDate="2011-10-01-07:00">\n' +
      '             <ns0:MonthlyPayStatus date="2011-10-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-09-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-08-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-07-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-06-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-05-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-04-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-03-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-02-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-01-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-12-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-11-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-10-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-09-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-08-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-07-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-06-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-05-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-04-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-03-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-02-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-01-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2009-12-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2009-11-01-07:00" status=" "/>\n' +
      '          </ns0:PayStatusHistory>\n' +
      '          <ns0:CreditLimit>2100</ns0:CreditLimit>\n' +
      '       </ns0:GrantedTrade>\n' +
      '       <ns0:Source>\n' +
      '          <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '          <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '          <ns0:Reference></ns0:Reference>\n' +
      '       </ns0:Source>\n' +
      '    </ns0:Tradeline>\n' +
      ' </ns0:TradeLinePartition>\n' +
      ' <ns0:TradeLinePartition accountTypeDescription="Revolving Account" accountTypeSymbol="R" accountTypeAbbreviation="Revolving">\n' +
      '    <ns0:Tradeline accountNumber="0X5X1X0X0X8" creditorName="M.WARD/MBGA" currentBalance="0" dateOpened="2012-05-10-07:00" highBalance="0" subscriberCode="235007R" position="6" bureau="TransUnion" handle="TR01_79414454_-1358945009_82">\n' +
      '       <ns0:AccountCondition abbreviation="Open" description="Open" symbol="O" rank="60"/>\n' +
      '       <ns0:AccountDesignator abbreviation="Individual" description="Individual" symbol="I" rank="199"/>\n' +
      '       <ns0:DisputeFlag abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:IndustryCode abbreviation="Miscellaneous Department &amp; Variety Stores" description="Miscellaneous Department &amp; Variety Stores" symbol="DZ" rank="199"/>\n' +
      '       <ns0:OpenClosed abbreviation="Open" description="Open" symbol="O" rank="199"/>\n' +
      '       <ns0:PayStatus abbreviation="Current" description="Current" symbol="C" rank="110"/>\n' +
      '       <ns0:VerificationIndicator abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:GrantedTrade amountPastDue="0" collateral="" late30Count="0" late60Count="0" late90Count="0" monthlyPayment="0" monthsReviewed="27" termMonths="0" worstPatStatusCount="27">\n' +
      '          <ns0:AccountType abbreviation="Unknown" description="Unknown" symbol="" rank="199"/>\n' +
      '          <ns0:CreditType abbreviation="Revolving" description="Revolving Account" symbol="R" rank="50"/>\n' +
      '          <ns0:PaymentFrequency abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:TermType abbreviation="Provided" description="Provided" symbol="P" rank="199"/>\n' +
      '          <ns0:WorstPayStatus abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:PayStatusHistory status="" startDate="2014-10-01-07:00">\n' +
      '             <ns0:MonthlyPayStatus date="2014-10-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2014-09-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2014-08-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2014-07-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2014-06-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2014-05-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2014-04-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2014-03-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2014-02-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2014-01-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2013-12-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2013-11-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2013-10-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2013-09-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2013-08-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2013-07-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2013-06-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2013-05-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2013-04-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2013-03-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2013-02-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2013-01-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2012-12-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2012-11-01-07:00" status=" "/>\n' +
      '          </ns0:PayStatusHistory>\n' +
      '          <ns0:CreditLimit>1700</ns0:CreditLimit>\n' +
      '       </ns0:GrantedTrade>\n' +
      '       <ns0:Source>\n' +
      '          <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '          <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '          <ns0:Reference></ns0:Reference>\n' +
      '       </ns0:Source>\n' +
      '    </ns0:Tradeline>\n' +
      ' </ns0:TradeLinePartition>\n' +
      ' <ns0:TradeLinePartition accountTypeDescription="Revolving Account" accountTypeSymbol="R" accountTypeAbbreviation="Revolving">\n' +
      '    <ns0:Tradeline accountNumber="1X2X1X5X0X0X" creditorName="SEARS ROEBUCK &amp; CO" currentBalance="0" dateAccountStatus="2011-10-15-07:00" dateOpened="2011-06-17-07:00" highBalance="10" subscriberCode="6256385" position="7" bureau="TransUnion" handle="TR01_-971350393_-2132345101_82">\n' +
      '       <ns0:AccountCondition abbreviation="Open" description="Open" symbol="O" rank="60"/>\n' +
      '       <ns0:AccountDesignator abbreviation="Individual" description="Individual" symbol="I" rank="199"/>\n' +
      '       <ns0:DisputeFlag abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:IndustryCode abbreviation="Complete Department Stores" description="Complete Department Stores" symbol="DC" rank="199"/>\n' +
      '       <ns0:OpenClosed abbreviation="Open" description="Open" symbol="O" rank="199"/>\n' +
      '       <ns0:PayStatus abbreviation="Current" description="Current" symbol="C" rank="110"/>\n' +
      '       <ns0:VerificationIndicator abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:GrantedTrade amountPastDue="0" collateral="" late30Count="0" late60Count="0" late90Count="0" monthlyPayment="0" monthsReviewed="1" termMonths="0" worstPatStatusCount="1">\n' +
      '          <ns0:AccountType abbreviation="Unknown" description="Unknown" symbol="" rank="199"/>\n' +
      '          <ns0:CreditType abbreviation="Revolving" description="Revolving Account" symbol="R" rank="50"/>\n' +
      '          <ns0:PaymentFrequency abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:TermType abbreviation="Provided" description="Provided" symbol="P" rank="199"/>\n' +
      '          <ns0:WorstPayStatus abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:PayStatusHistory status="" startDate="2011-12-01-08:00">\n' +
      '             <ns0:MonthlyPayStatus date="2011-12-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-11-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-10-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-09-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-08-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-07-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-06-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-05-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-04-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-03-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-02-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2011-01-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-12-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-11-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-10-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-09-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-08-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-07-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-06-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-05-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-04-01-07:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-03-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-02-01-08:00" status=" "/>\n' +
      '             <ns0:MonthlyPayStatus date="2010-01-01-08:00" status=" "/>\n' +
      '          </ns0:PayStatusHistory>\n' +
      '          <ns0:CreditLimit>2200</ns0:CreditLimit>\n' +
      '       </ns0:GrantedTrade>\n' +
      '       <ns0:Source>\n' +
      '          <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '          <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '          <ns0:Reference></ns0:Reference>\n' +
      '       </ns0:Source>\n' +
      '    </ns0:Tradeline>\n' +
      ' </ns0:TradeLinePartition>\n' +
      ' <ns0:TradeLinePartition accountTypeDescription="Revolving Account" accountTypeSymbol="R" accountTypeAbbreviation="Revolving">\n' +
      '    <ns0:Tradeline accountNumber="5X7X6X2X6X0X" creditorName="TRANSAMERICA BANK" currentBalance="0" dateAccountStatus="2015-08-03-07:00" dateClosed="2015-08-03-07:00" dateOpened="2012-03-03-08:00" highBalance="1056" subscriberCode="930N133" position="8" bureau="TransUnion" handle="TR01_-1399178666_554890393_82">\n' +
      '       <ns0:AccountCondition abbreviation="Derog" description="Derogatory" symbol="F" rank="20"/>\n' +
      '       <ns0:AccountDesignator abbreviation="Individual" description="Individual" symbol="I" rank="199"/>\n' +
      '       <ns0:DisputeFlag abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:IndustryCode abbreviation="Sales Financing Company" description="Sales Financing Company" symbol="FF" rank="199"/>\n' +
      '       <ns0:OpenClosed abbreviation="Open" description="Open" symbol="O" rank="199"/>\n' +
      '       <ns0:PayStatus abbreviation="Unk" description="Unknown" symbol="U" rank="10000"/>\n' +
      '       <ns0:VerificationIndicator abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:Remark customRemark="">\n' +
      '          <ns0:RemarkCode abbreviation="Included in bankruptcy" description="Included in bankruptcy" symbol="T00BKL" rank="199"/>\n' +
      '       </ns0:Remark>\n' +
      '       <ns0:GrantedTrade amountPastDue="0" collateral="" dateLastPayment="2016-12-11-08:00" late30Count="0" late60Count="0" late90Count="0" monthlyPayment="0" monthsReviewed="0" termMonths="0" worstPatStatusCount="0">\n' +
      '          <ns0:AccountType abbreviation="Charge account" description="Charge account" symbol="CH" rank="50"/>\n' +
      '          <ns0:CreditType abbreviation="Revolving" description="Revolving Account" symbol="R" rank="50"/>\n' +
      '          <ns0:PaymentFrequency abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:TermType abbreviation="Provided" description="Provided" symbol="P" rank="199"/>\n' +
      '          <ns0:WorstPayStatus abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:PayStatusHistory/>\n' +
      '          <ns0:CreditLimit>3500</ns0:CreditLimit>\n' +
      '       </ns0:GrantedTrade>\n' +
      '       <ns0:Source>\n' +
      '          <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '          <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '          <ns0:Reference></ns0:Reference>\n' +
      '       </ns0:Source>\n' +
      '    </ns0:Tradeline>\n' +
      ' </ns0:TradeLinePartition>\n' +
      ' <ns0:TradeLinePartition accountTypeDescription="Revolving Account" accountTypeSymbol="R" accountTypeAbbreviation="Revolving">\n' +
      '    <ns0:Tradeline accountNumber="4X1X1X0X1X2X2X7X" creditorName="WACHOVIA-BANKCARD" currentBalance="0" dateAccountStatus="2015-08-02-07:00" dateClosed="2015-08-02-07:00" dateOpened="2013-10-10-07:00" highBalance="0" subscriberCode="3763001" position="9" bureau="TransUnion" handle="TR01_-973781138_-355912080_82">\n' +
      '       <ns0:AccountCondition abbreviation="Derog" description="Derogatory" symbol="F" rank="20"/>\n' +
      '       <ns0:AccountDesignator abbreviation="Individual" description="Individual" symbol="I" rank="199"/>\n' +
      '       <ns0:DisputeFlag abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:IndustryCode abbreviation="Bank Credit Cards" description="Bank Credit Cards" symbol="BC" rank="199"/>\n' +
      '       <ns0:OpenClosed abbreviation="Open" description="Open" symbol="O" rank="199"/>\n' +
      '       <ns0:PayStatus abbreviation="Unk" description="Unknown" symbol="U" rank="10000"/>\n' +
      '       <ns0:VerificationIndicator abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:Remark customRemark="">\n' +
      '          <ns0:RemarkCode abbreviation="Chapter 7 bankruptcy" description="Chapter 7 bankruptcy" symbol="T00CBL" rank="199"/>\n' +
      '       </ns0:Remark>\n' +
      '       <ns0:GrantedTrade amountPastDue="0" collateral="" dateLastPayment="2015-07-20-07:00" late30Count="0" late60Count="0" late90Count="0" monthlyPayment="0" monthsReviewed="0" termMonths="0" worstPatStatusCount="0">\n' +
      '          <ns0:AccountType abbreviation="Credit Card" description="Credit Card" symbol="CC" rank="50"/>\n' +
      '          <ns0:CreditType abbreviation="Revolving" description="Revolving Account" symbol="R" rank="50"/>\n' +
      '          <ns0:PaymentFrequency abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:TermType abbreviation="Provided" description="Provided" symbol="P" rank="199"/>\n' +
      '          <ns0:WorstPayStatus abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '          <ns0:PayStatusHistory/>\n' +
      '          <ns0:CreditLimit>0</ns0:CreditLimit>\n' +
      '       </ns0:GrantedTrade>\n' +
      '       <ns0:Source>\n' +
      '          <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '          <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '          <ns0:Reference></ns0:Reference>\n' +
      '       </ns0:Source>\n' +
      '    </ns0:Tradeline>\n' +
      ' </ns0:TradeLinePartition>\n' +
      ' <ns0:PulblicRecordPartition>\n' +
      '    <ns0:PublicRecord courtName="" referenceNumber="9X4X6X3" subscriberCode="4871356" bureau="TransUnion" handle="PR01_1618166926_561087734">\n' +
      '       <ns0:AccountDesignator abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '       <ns0:Classification abbreviation="Bankruptcy" description="Bankruptcy" symbol="B" rank="199"/>\n' +
      '       <ns0:IndustryCode abbreviation="Personal Service Reseller" description="Personal Service Reseller" symbol="ZP" rank="199"/>\n' +
      '       <ns0:Status abbreviation="Discharged" description="Discharged" symbol="1" rank="199"/>\n' +
      '       <ns0:Type abbreviation="Chapter 7 Bankruptcy" description="Chapter 7 Bankruptcy" symbol="1" rank="199"/>\n' +
      '       <ns0:Bankruptcy courtNumber="" division="" assetAmount="0" dateResolved="2016-01-25-08:00" exemptAmount="0" liabilityAmount="0" trustee="" company="" thirdParty=""/>\n' +
      '       <ns0:Source>\n' +
      '          <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '          <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '          <ns0:Reference></ns0:Reference>\n' +
      '       </ns0:Source>\n' +
      '    </ns0:PublicRecord>\n' +
      ' </ns0:PulblicRecordPartition>\n' +
      ' <ns0:Subscriber name="CARD PRODUCTS" telephone="Phone number not available" subscriberCode="927P029">\n' +
      '    <ns0:CreditAddress city="CHARLOTTE" stateCode="NC" unparsedStreet="PO BOX 563966" postalCode="282560001"/>\n' +
      '    <ns0:IndustryCode abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '    <ns0:Source>\n' +
      '       <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '       <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '       <ns0:Reference></ns0:Reference>\n' +
      '    </ns0:Source>\n' +
      ' </ns0:Subscriber>\n' +
      ' <ns0:Subscriber name="CHASE NA" telephone="Phone number not available" subscriberCode="402D013">\n' +
      '    <ns0:CreditAddress city="WESTERVILLE" stateCode="OH" unparsedStreet="880 BROOKS EDGE BLVD" postalCode="43081"/>\n' +
      '    <ns0:IndustryCode abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '    <ns0:Source>\n' +
      '       <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '       <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '       <ns0:Reference></ns0:Reference>\n' +
      '    </ns0:Source>\n' +
      ' </ns0:Subscriber>\n' +
      ' <ns0:Subscriber name="CITIBANK UCS" telephone="(904) 954-7500" subscriberCode="8194006">\n' +
      '    <ns0:CreditAddress city="SIOUX FALLS" stateCode="SD" unparsedStreet="701 E 60TH ST N" postalCode="57104"/>\n' +
      '    <ns0:IndustryCode abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '    <ns0:Source>\n' +
      '       <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '       <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '       <ns0:Reference></ns0:Reference>\n' +
      '    </ns0:Source>\n' +
      ' </ns0:Subscriber>\n' +
      ' <ns0:Subscriber name="DISCOVER FINCL SVC LLC" telephone="(800) 347-2683" subscriberCode="9616003">\n' +
      '    <ns0:CreditAddress city="WILMINGTON" stateCode="DE" unparsedStreet="1072 SW 101 St,Test 68" postalCode="198505316"/>\n' +
      '    <ns0:IndustryCode abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '    <ns0:Source>\n' +
      '       <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '       <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '       <ns0:Reference></ns0:Reference>\n' +
      '    </ns0:Source>\n' +
      ' </ns0:Subscriber>\n' +
      ' <ns0:Subscriber name="FIRST USA BANK" telephone="(800) 283-1211" subscriberCode="3429001">\n' +
      '    <ns0:CreditAddress city="ELGIN" stateCode="IL" unparsedStreet="2500 WESTFIELD DR" postalCode="60124"/>\n' +
      '    <ns0:IndustryCode abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '    <ns0:Source>\n' +
      '       <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '       <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '       <ns0:Reference></ns0:Reference>\n' +
      '    </ns0:Source>\n' +
      ' </ns0:Subscriber>\n' +
      ' <ns0:Subscriber name="ITT FIN" telephone="Phone number not available" subscriberCode="64DB002">\n' +
      '    <ns0:CreditAddress city="SOUIX FALLS" stateCode="SD" unparsedStreet="PO BOX 6241" postalCode="57117"/>\n' +
      '    <ns0:IndustryCode abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '    <ns0:Source>\n' +
      '       <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '       <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '       <ns0:Reference></ns0:Reference>\n' +
      '    </ns0:Source>\n' +
      ' </ns0:Subscriber>\n' +
      ' <ns0:Subscriber name="M.WARD/MBGA" telephone="Phone number not available" subscriberCode="235007R">\n' +
      '    <ns0:CreditAddress city="LENEXA" stateCode="KS" unparsedStreet="PO BOX 29114" postalCode="66215"/>\n' +
      '    <ns0:IndustryCode abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '    <ns0:Source>\n' +
      '       <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '       <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '       <ns0:Reference></ns0:Reference>\n' +
      '    </ns0:Source>\n' +
      ' </ns0:Subscriber>\n' +
      ' <ns0:Subscriber name="SEARS ROEBUCK &amp; CO" telephone="(800) 326-0115" subscriberCode="6256385">\n' +
      '    <ns0:CreditAddress city="CLEVELAND" stateCode="OH" unparsedStreet="13200 SMITH ROAD" postalCode="441306282"/>\n' +
      '    <ns0:IndustryCode abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '    <ns0:Source>\n' +
      '       <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '       <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '       <ns0:Reference></ns0:Reference>\n' +
      '    </ns0:Source>\n' +
      ' </ns0:Subscriber>\n' +
      ' <ns0:Subscriber name="TRANSAMERICA BANK" telephone="Phone number not available" subscriberCode="930N133">\n' +
      '    <ns0:CreditAddress city="CRYSTAL LAKE" stateCode="IL" unparsedStreet="POB 130" postalCode="60139"/>\n' +
      '    <ns0:IndustryCode abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '    <ns0:Source>\n' +
      '       <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '       <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '       <ns0:Reference></ns0:Reference>\n' +
      '    </ns0:Source>\n' +
      ' </ns0:Subscriber>\n' +
      ' <ns0:Subscriber name="WACHOVIA-BANKCARD" telephone="Phone number not available" subscriberCode="3763001">\n' +
      '    <ns0:CreditAddress city="WINSTON-SALEM" stateCode="NC" unparsedStreet="PO BOX 3117" postalCode="27102"/>\n' +
      '    <ns0:IndustryCode abbreviation="" description="" symbol="" rank="100000"/>\n' +
      '    <ns0:Source>\n' +
      '       <ns0:BorrowerKey></ns0:BorrowerKey>\n' +
      '       <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '       <ns0:Reference></ns0:Reference>\n' +
      '    </ns0:Source>\n' +
      ' </ns0:Subscriber>\n' +
      ' <ns0:Summary>\n' +
      '    <ns0:TradelineSummary>\n' +
      '       <ns0:TransUnion TotalAccounts="10" OpenAccounts="9" CloseAccounts="1" DelinquentAccounts="0" DerogatoryAccounts="7" TotalBalances="0.0" TotalMonthlyPayments="0.0"/>\n' +
      '    </ns0:TradelineSummary>\n' +
      '    <ns0:InquirySummary>\n' +
      '       <ns0:TransUnion NumberInLast2Years="0"/>\n' +
      '    </ns0:InquirySummary>\n' +
      '    <ns0:PublicRecordSummary>\n' +
      '       <ns0:TransUnion NumberOfRecords="1"/>\n' +
      '    </ns0:PublicRecordSummary>\n' +
      ' </ns0:Summary>\n' +
      ' <ns0:Sources>\n' +
      '    <ns0:Source>\n' +
      '       <ns0:Bureau abbreviation="TransUnion" description="TransUnion" symbol="TUC" rank="1"/>\n' +
      '    </ns0:Source>\n' +
      ' </ns0:Sources>\n' +
      ' <ns0:SafetyCheckPassed>true</ns0:SafetyCheckPassed>\n' +
      '</trueLinkCreditReportType>'
  }
}
