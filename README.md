murfy
=====

Murfy: A bootstrap Drupal subtheme



Prerequisites
--------------------------------------------------
This theme has the following dependencies
1. Bootstrap theme: https://drupal.org/project/bootstrap.  Put that in your sites/all/themes directory
2. Block Class module: https://drupal.org/project/block_class.  Put that in your sites/all/modules directory

The Block Class module allows you to create blocks and easily add css classes to them.  The theme works
by allowing you to use the classes it has styled for any of the blocks you want.


Getting the beautiful transparent overlay on the header
--------------------------------------------------
1. Go to admin/structure/block and create a new block
2. Fill in the 'Block description' (for the admin display)
3. Fill in the 'Block body' (the content)
4. Fill in the 'CSS class(es)' field with "block-about"