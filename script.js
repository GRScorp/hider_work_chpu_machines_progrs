jQuery('document').ready(function(){
	var c1=0,c2=0,c3=0;

 
 jQuery(".n1_box").click(function()/*show/hide box*/
	{
		if (c1==0)
		{
			$('#box_1_id').fadeIn(300);
        	var iddiv = $(this).attr("iddiv");
        	$('#'+iddiv).fadeIn(300);
        	$('#box_1_id').attr('opendiv',iddiv);
        	c1=1;
        	return false;
		}
		if (c1==1)
		{
        	var iddiv = $("#box_1_id").attr('opendiv');
        	$('#box_1_id').fadeOut(300);
        	$('#'+iddiv).fadeOut(300);
        	c1=0;
		}
	});

 jQuery(".n2_box").click(function()/*show/hide box*/
	{
		if (c2==0)
		{
			$('#box_2_id').fadeIn(300);
        	var iddiv = $(this).attr("iddiv");
        	$('#'+iddiv).fadeIn(300);
        	$('#box_2_id').attr('opendiv',iddiv);
        	c2=1;
        	return false;
		}
		if (c2==1)
		{
        	var iddiv = $("#box_2_id").attr('opendiv');
        	$('#box_2_id').fadeOut(300);
        	$('#'+iddiv).fadeOut(300);
        	c2=0;
		}
	});

 jQuery(".n3_box").click(function()/*show/hide box*/
	{
		if (c3==0)
		{
			$('#box_3_id').fadeIn(300);
        	var iddiv = $(this).attr("iddiv");
        	$('#'+iddiv).fadeIn(300);
        	$('#box_3_id').attr('opendiv',iddiv);
        	c3=1;
        	return false;
		}
		if (c3==1)
		{
        	var iddiv = $("#box_3_id").attr('opendiv');
        	$('#box_3_id').fadeOut(300);
        	$('#'+iddiv).fadeOut(300);
        	c3=0;
		}
	});

});