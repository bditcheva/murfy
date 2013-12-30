<?php

/**
 * @file template.php
 */

 
function murfy_preprocess_node(&$vars, $hook) {
  $vars['submitted'] = 	'<div id="date-submitted"><div class="month">' . date("M", $vars['created']) . '</div>' . 
			'<div class="day">' . date("d", $vars['created']) . '</div>' . 
			'<div class="year">' . date("Y", $vars['created']) . '</div></div>';
 }