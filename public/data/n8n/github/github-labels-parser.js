//! Github Labels Parser for n8n.
//! Remember to Run Once for All items.
//? The objective of this parser is to grab all the labels for a new github issue.
//TODO [1] It will also add an exsiting item.json that is a Boolean for pre-exisiting labels.
//TODO [2] .forEach grab all the exisiting labels and consolidate them into one.
//TODO [3] Insert custom label into the new label array.

for (const item of $input.all()) {
    if(item.json.labels)
    {
     item.json.labelBool = true;
    } else
    {
    item.json.labelBool = false;
    }
  }
  
  return $input.all();