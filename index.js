// health_solution

function solution() {
    var a = document.getElementById('issues').value;
    var ingredient = document.getElementById('ingredient').value;
    var solution = "";
    if (a == 'Cold') {
        if (ingredient == 'Ginger') {
            solution = "Have some ginger tea or chew on ginger slices.";
        } else if (ingredient == 'Lemon') {
            solution = "Drink warm water with lemon and honey.";
        } else if (ingredient == 'Coconut') {
            solution = "Consume coconut water to stay hydrated.";
        } else if (ingredient == 'Turmeric') {
            solution ="Have turmeric and milk.";
        } else if (ingredient == 'Other') {
            solution = "Consume peppermint tea.";
        }
    }
    else if (a == 'Fever') {
        if (ingredient == 'Ginger') {
            solution = "Ginger tea, other herbal teas like peppermint, chamomile, or elderberry tea may help soothe symptoms and promote relaxation..";
        } else if (ingredient == 'Lemon') {
            solution = "Drink warm water with lemon and honey.";
        } else if (ingredient == 'Coconut') {
            solution = "Consume coconut water to stay hydrated.";
        } else if (ingredient == 'Turmeric') {
            solution ="Have turmeric and milk.";
        } else if (ingredient == 'Other') {
            solution = "Avoid spicy foods and drink plenty of fluids..";
        }     
    } 
    else if (a == 'Stomach Pain') {
        if (ingredient == 'Ginger') {
            solution = "Ginger tea, other herbal teas like peppermint, chamomile, or elderberry tea may help soothe symptoms and promote relaxation..";
        } else if (ingredient == 'Lemon') {
            solution = "Drink warm water with lemon and honey.";
        } else if (ingredient == 'Coconut') {
            solution = "Consume coconut water to stay hydrated.";
        } else if (ingredient == 'Turmeric') {
            solution ="Have turmeric and milk.";
        } else if (ingredient == 'Other') {
            solution = "Avoid spicy foods and drink plenty of fluids..";
        }   
    } 
    else if(a=='Head Ache'){
        if (ingredient == 'Ginger') {
            solution = "Ginger tea, other herbal teas like peppermint, chamomile, or elderberry tea may help soothe symptoms and promote relaxation..";
        } else if (ingredient == 'Lemon') {
            solution = "Drink warm water with lemon and honey.";
        } else if (ingredient == 'Coconut') {
            solution = "Consume coconut water to stay hydrated.";
        } else if (ingredient == 'Turmeric') {
            solution ="Have turmeric and milk.";
        } else if (ingredient == 'Other') {
            solution = "Avoid spicy foods and drink plenty of fluids..";
        }   
    }
    else if(a=='Vomit'){
        if (ingredient == 'Ginger') {
            solution = "Ginger tea, other herbal teas like peppermint, chamomile, or elderberry tea may help soothe symptoms and promote relaxation..";
        } else if (ingredient == 'Lemon') {
            solution = "Drink warm water with lemon and honey.";
        } else if (ingredient == 'Coconut') {
            solution = "Consume coconut water to stay hydrated.";
        } else if (ingredient == 'Turmeric') {
            solution ="Have turmeric and milk.";
        } else if (ingredient == 'Other') {
            solution = "Avoid spicy foods and drink plenty of fluids..";
        }   
    }
     else if(a=='Acidity'){
        if (ingredient == 'Ginger') {
            solution = "Ginger tea, other herbal teas like peppermint, chamomile, or elderberry tea may help soothe symptoms and promote relaxation..";
        } else if (ingredient == 'Lemon') {
            solution = "Drink warm water with lemon and honey.";
        } else if (ingredient == 'Coconut') {
            solution = "Consume coconut water to stay hydrated.";
        } else if (ingredient == 'Turmeric') {
            solution ="Have turmeric and milk.";
        } else if (ingredient == 'Other') {
            solution = "Avoid spicy foods and drink plenty of fluids..";
        }   
    }
    else if(a=='Tooth Pain'){
        if (ingredient == 'Ginger') {
            solution = "Ginger tea, other herbal teas like peppermint, chamomile, or elderberry tea may help soothe symptoms and promote relaxation..";
        } else if (ingredient == 'Lemon') {
            solution = "Drink warm water with lemon and honey.";
        } else if (ingredient == 'Coconut') {
            solution = "Consume coconut water to stay hydrated.";
        } else if (ingredient == 'Turmeric') {
            solution ="Have turmeric and milk.";
        } else if (ingredient == 'Other') {
            solution = "Avoid spicy foods and drink plenty of fluids..";
        }   
    }
    
    else if(a=='Pimple'){
        if (ingredient == 'Ginger') {
            solution = "Ginger tea, other herbal teas like peppermint, chamomile, or elderberry tea may help soothe symptoms and promote relaxation..";
        } else if (ingredient == 'Lemon') {
            solution = "squeeze a lemon into a bowl and add a few drops of rose water to it";
        } else if (ingredient == 'Coconut') {
            solution = "Apply coconut all over the face daily before bath";
        } else if (ingredient == 'Turmeric') {
            solution ="Apply turmeric and honey paste on the pimple";
        } else if (ingredient == 'Other') {
            solution = "Apply alovera or rose water for moisturization";
        }   
    }
     else if(a=='Loosemotion'){
        if (ingredient == 'Ginger') {
            solution = "Consume ginger juice for better digestion";
        } else if (ingredient == 'Lemon') {
            solution = "Drink warm water with lemon,ginger and honey mixture.";
        } else if (ingredient == 'Coconut') {
            solution = "Consume plain grated coconut";
        } else if (ingredient == 'Turmeric') {
            solution ="Have turmeric and milk.";
        } else if (ingredient == 'Other') {
            solution = "Avoid spicy foods and drink plenty of fluids..";
        }   
    }
     else if(a=='Burn'){
        if (ingredient == 'Ginger') {
            solution = "Ginger  and honey paste on burned area";
        } else if (ingredient == 'Lemon') {
            solution = "Dab gently cloth with lemon juice in affected area ";
        } else if (ingredient == 'Coconut') {
            solution = "Apply cocunut oil";
        } else if (ingredient == 'Turmeric') {
            solution ="Apply turmeric and honey paste on burned area";
        } else if (ingredient == 'Other') {
            solution = "Cold compress immediatly ";
        }   
    }
 
    document.getElementById('textarea').value = solution;
}

